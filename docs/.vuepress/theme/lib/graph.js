import Konva from "konva";

const EasingFunctions = {
  // no easing, no acceleration
  linear: t => t,
  // accelerating from zero velocity
  easeInQuad: t => t * t,
  // decelerating to zero velocity
  easeOutQuad: t => t * (2 - t),
  // acceleration until halfway, then deceleration
  easeInOutQuad: t => t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  // accelerating from zero velocity 
  easeInCubic: t => t * t * t,
  // decelerating to zero velocity 
  easeOutCubic: t => (--t) * t * t + 1,
  // acceleration until halfway, then deceleration 
  easeInOutCubic: t => t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  // accelerating from zero velocity 
  easeInQuart: t => t * t * t * t,
  // decelerating to zero velocity 
  easeOutQuart: t => 1 - (--t) * t * t * t,
  // acceleration until halfway, then deceleration
  easeInOutQuart: t => t < .5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t,
  // accelerating from zero velocity
  easeInQuint: t => t * t * t * t * t,
  // decelerating to zero velocity
  easeOutQuint: t => 1 + (--t) * t * t * t * t,
  // acceleration until halfway, then deceleration 
  easeInOutQuint: t => t < .5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t
}

const EVENT_TYPE = {
  spawn: 1,
  roundCompleted: 2,
  roundReceived: 3,
  stronglySeeing: 4,
  famous: 5,
  remove: 6,
}

const STEP = {
  x: 18,
  y: 20
}

const OFFSET = {
  x: 10,
  y: 40
}

export default class Graph {
  constructor(element) {
    this.element = element;
    this.eventsQueue = []
    this.removeQueue = []

    // Positioning helpers:
    this.nodes = [];
    this.maxPointX = 0;
    this.isAlignedX = false;
    this.isAlignedY = false;

    // Layaers and stage
    this.stage = new Konva.Stage({
      container: element.id,
      width: element.offsetWidth,
      height: element.offsetHeight,
      listening: false
    });

    this.layerMain = new Konva.Layer({ listening: false });

    this.groupLines = new Konva.Group({ listening: false });
    this.groupEvents = new Konva.Group({ listening: false });

    this.layerMain.add(this.groupLines);
    this.layerMain.add(this.groupEvents);

    this.stage.add(this.layerMain);

    // Handle resize
    window.addEventListener("resize", e => {
      e.preventDefault();
      this._handleContainerSize();
    });
  }

  destroy() {
    this.element.innerHtml = ''
  }

  onStateUpdate(event) {
    if (event.type == HashChangeEvent.remove) {
      this.removeQueue.push(event);
    } else {

      this.eventsQueue.push(event);
    }
  }

  handleQueue() {
    for (let i = 0; i < 100; i++) {
      if (this.removeQueue.length === 0) break;

      const event = this.removeQueue.shift()
      this._handleEvent(event);
    }

    let amount = 1
    if (this.eventsQueue.length > 100) {
      amount *= (this.eventsQueue.length / 20);
    }

    for (let i = 0; i < amount; i++) {
      if (this.eventsQueue.length === 0) break;

      const event = this.eventsQueue.shift()
      this._handleEvent(event);
    }
  }

  _handleEvent(event) {
    if (this.nodes.indexOf(event.nodeId) === -1) {
      this.nodes.push(event.nodeId);
      this.isAlignedY = false;
    }

    if (event.type == EVENT_TYPE.spawn) {
      this._createEventNode(event);
      if (!this.isAlignedX) {
        this._scroll();
      }
    } else if (event.type == EVENT_TYPE.stronglySeeing) {
      this._setNodeStronglySeeing(event)
    } else if (event.type == EVENT_TYPE.famous) {
      this._setNodeFamous(event)
    } else if (event.type == EVENT_TYPE.roundReceived) {
      this._setNodeRound(event)
    } else if (event.type == EVENT_TYPE.remove) {
      this._removeEventNode(event)
    }
  }

  _removeEventNode(data) {
    const { id } = data

    const node = this.layerMain.findOne(`#${id}`);

    if (node) {
      const fatherLine = this.layerMain.findOne(`#${this._createLineId(node.id(), 'father')}`)
      const motherLine = this.layerMain.findOne(`#${this._createLineId(node.id(), 'mother')}`)

      node.destroy();
      if (fatherLine) fatherLine.destroy();
      if (motherLine) motherLine.destroy();
    }
  }

  _createEventNode(data, fast) {
    const { mother, father, id, nodeId } = data

    const notItself = this.stage.findOne(`#${id}`)
    if (notItself) { return; }
    const motherNode = mother ? this.stage.findOne(`#${mother}`) : undefined;
    const fatherNode = father ? this.stage.findOne(`#${father}`) : undefined;

    let positionX = STEP.x;

    if (motherNode && fatherNode) {
      const max = Math.max(motherNode.x(), fatherNode.x()) + STEP.x;
      positionX = max;
    } else if (fatherNode) {
      positionX = fatherNode.x() + STEP.x;
    } else if (motherNode) {
      positionX = motherNode.x() + STEP.x;
    }

    if (this.maxPointX < positionX) {
      this.maxPointX = positionX;
      this.isAlignedX = false;
    }

    let nodeIndex = parseInt(nodeId);

    let node = new Konva.Circle({
      x: positionX,
      y: nodeIndex * STEP.y + OFFSET.y,
      fill: "#fff",
      radius: fast ? 6 : 2,
      strokeWidth: 2,
      stroke: '#444',
      id: id.toString()
    });

    this.groupEvents.add(node);

    if (mother) {
      this._connectEventNodes(motherNode, node, "mother", fast);
    }

    if (father) {
      this._connectEventNodes(fatherNode, node, "father", fast);
    }

    this.layerMain.batchDraw();

    if (!fast) {

      let tween = new Konva.Tween({
        node: node,
        radius: 6,
        duration: fast ? 0 : .5,
        onUpdate: () => { this.layerMain.batchDraw(); },
        easing: Konva.Easings.StrongEaseOut,
        strokeWidth: 2
      });

      tween.onFinish = () => { tween.destroy(); }

      tween.play();
    }
  }

  _setNodeStronglySeeing(data, fast) {
    const { id } = data

    const node = this.stage.findOne(`#${id}`);

    if (node) {
      if (fast) {
        node.setAttr('fill', '#4e8fde')
      } else {

        var tween = new Konva.Tween({
          node: node,
          duration: .5,
          fill: '#4e8fde',
          onUpdate: () => { this.layerMain.batchDraw(); },
        });

        tween.onFinish = () => { tween.destroy(); }
        tween.play();
      }
    }

    this.layerMain.batchDraw();
  }

  _setNodeFamous(data, fast) {
    const { id } = data

    const node = this.stage.findOne(`#${id}`);

    if (node) {
      if (fast) {
        node.setAttr('fill', '#fc8c03')
      } else {
        var tween = new Konva.Tween({
          node: node,
          duration: .5,
          fill: '#fc8c03',
          onUpdate: () => { this.layerMain.batchDraw(); },
        });

        tween.onFinish = () => { tween.destroy(); }
        tween.play();
      }
    }

    this.layerMain.batchDraw();
  }

  _setNodeRound(data, fast) {
    const { id } = data

    const node = this.stage.findOne(`#${id}`);

    if (node) {
      if (fast) {
        node.setAttr('strokeWidth', 5)
        node.setAttr('stroke', '#ddd')
        node.setAttr('radius', 3)
      } else {
        var tween = new Konva.Tween({
          node: node,
          duration: .5,
          onUpdate: () => { this.layerMain.batchDraw(); },
          easing: Konva.Easings.StrongEaseOut,
          strokeWidth: 5,
          stroke: '#ddd',
          radius: 3
        });

        tween.onFinish = () => { tween.destroy(); }
        tween.play();
      }
    }

    this.layerMain.batchDraw();
  }

  _connectEventNodes(node1, node2, suffix, fast) {
    if (!node1 || !node2) return;

    let points = [node1.x(), node1.y(), node2.x(), node2.y()]
    if (!fast) {
      points = [node1.x(), node1.y(), node1.x(), node1.y()]
    }

    let lineNode = new Konva.Line({
      points: points,
      stroke: "#aaa",
      strokeWidth: 1,
      id: this._createLineId(node1.id(), suffix),
    });

    this.groupLines.add(lineNode);
    this.layerMain.batchDraw();

    if (!fast) {
      let tween = new Konva.Tween({
        node: lineNode,
        duration: fast ? 0 : .5,
        onUpdate: () => { this.layerMain.batchDraw(); },
        easing: Konva.Easings.StrongEaseOut,
        points: [node1.x(), node1.y(), node2.x(), node2.y()]
      });

      tween.onFinish = () => { tween.destroy(); }
      tween.play();
    }
  }

  _createLineId(id1, suffix) {
    return `line_${id1}_${suffix}`
  }

  _handleContainerSize() {
    this.stage.width(this.element.offsetWidth);
    this.stage.height(this.element.offsetHeight);
    this._scroll();
  }

  _scroll() {
    if (this.isAlignedX) return;


    if (this.autoScrollAnimation) {
      this.autoScrollAnimation.stop();
    }

    if (!this.isAlignedX) {
      if (this.maxPointX <= this.element.offsetWidth * .7) {
        this.isAlignedX = true;
        return;
      }

      let newX = -this.maxPointX + this.element.offsetWidth * .7;

      if (newX != this.layerMain.x()) {
        this.autoScrollAnimation = new Konva.Animation(frame => {
          this._scrollAnimation(frame, this.layerMain.x(), newX, 500);
          return false;
        });

        this.autoScrollAnimation.start();
      }
    }

  }

  _scrollAnimation(frame, from, to, ms) {
    let frameProgress = (frame.time + 0.1) / ms;
    let easedFrameProgress = EasingFunctions.easeOutQuad(frameProgress);

    let diffX = to - from;
    let targetX = from + diffX * easedFrameProgress;

    if (Math.abs(diffX) < 0.2) {
      targetX = to;
      this.isAlignedX = true;
    }

    if (typeof targetX === 'number' && isFinite(targetX)) {
      this.layerMain.x(targetX);
    }

    // Draw
    this.layerMain.batchDraw();
  }


  // drawInitialState(state) {
  //   // Sort
  //   const unsortedArray = []
  //   for (const nodeId in state) {
  //     const nodeIdNumber = parseInt(nodeId);

  //     if (this.nodes.indexOf(nodeIdNumber) === -1) {
  //       this.nodes.push(nodeIdNumber);
  //       this.isAlignedY = false;
  //     }

  //     for (const eventId in state[nodeId]) {
  //       unsortedArray.push(state[nodeId][eventId])
  //     }
  //   }
  //   const sortedArray = unsortedArray.sort((a, b) => {
  //     return a.spawnOrder - b.spawnOrder;
  //   });

  //   // Draw
  //   for (const event of sortedArray) {
  //     this._createEventNode(event, true);

  //     if (event.round) {
  //       this._setNodeRound(event, true);
  //     }

  //     if (event.stronglySeeing) {
  //       this._setNodeStronglySeeing(event, true);
  //     }

  //     if (event.famous) {
  //       this._setNodeFamous(event, true);
  //     }
  //   }

  //   this.isAlignedX = false;
  //   this._scroll();
  // }
}
