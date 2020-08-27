import Konva from "konva";

const hashgraphEventType = {
  spawn: 1,
  roundCompleted: 2,
  roundReceived: 3,
  stronglySeeing: 4,
  famous: 5,
  remove: 6,
}

export default class Graph {
  constructor(container) {
    this.counterNodeSelection = 0;

    this.autoScrollAnimation = null;
    this.messageQueue = [];
    this.deleteQueue = [];
    this.updateQueue = [];
    this.needReset = true;
    this.nodesNumber = 5;
    this.nodes = [];
    this.lookup = [];
    this.lookupCreated = [];

    this.lastScrollY = 1;
    this.aligned = false;

    this.xStep = 9;
    this.yStep = 6;

    this.style = {
      eventNode: {
        backgroundColor: "#fff",
        strokeColor: "#444",
        strokeWidth: 3
      },
      eventLine: {
        fill: "#eee"
      }
    };

    this.isConnected = false;
    this.highestPointY = 0;

    this.element = container;

    this.stage = new Konva.Stage({
      container: container.id,
      width: container.offsetWidth,
      height: container.offsetHeight,
      listening: false
    });

    this.stage.width(container.offsetWidth);
    this.stage.height(container.offsetHeight);

    this._reset();

    window.addEventListener("resize", e => {
      e.preventDefault();

      this.stage.width(container.offsetWidth);
      this.stage.height(container.offsetHeight);
      this.scaleX();
      this.scroll();
    });
  }

  scaleX() {
    if (this.stage.width() < this.xStep * (this.nodesNumber + 1)) {
      this.layerMain.scaleX(0.7);
    } else {
      this.layerMain.scaleX(1);
    }
  }

  scroll() {
    if (this.autoScrollAnimation) this.autoScrollAnimation.stop();
    this.autoScrollAnimation = new Konva.Animation(frame => {
      this._autoScroll(frame);
      return false;
    });

    this.autoScrollAnimation.start();
  }

  onStateUpdate(event) {
    if (this.nodes.indexOf(event.nodeId) == -1) {
      this.nodes.push(event.nodeId);
    }

    if (event.type == hashgraphEventType.remove) {
      if (this.lookup.indexOf(event.id) !== -1) {
        this.deleteQueue.push(event);
      }
    } else if (event.type == hashgraphEventType.spawn) {
      this._createEventNode(event)
    }

    this.scroll();
  }

  _removeEventNode(data) {
    let nodes = this.layerMain.find("." + data.id);
    let lineNodes = this.layerMain.find("." + data.id + "_line");

    if (nodes.length) {
      for (let node of nodes) {
        new Konva.Tween({
          node,
          scaleX: 0,
          duration: 0.3
        }).play();
      }

      for (let node of lineNodes) {
        new Konva.Tween({
          node,
          opacity: 0,
          duration: 0.15
        }).play();
      }

      setTimeout(() => {
        for (let node of nodes) {
          node.destroy();
        }

        for (let node of lineNodes) {
          node.destroy();
        }

        let indexOfEvent = this.lookup.indexOf(data.id);
        this.lookup.splice(indexOfEvent, 1);
        indexOfEvent = this.lookupCreated.indexOf(data.id);
        this.lookupCreated.splice(indexOfEvent, 1);
      }, 500);
    }
  }

  _createEventNode(data) {
    let motherId = data.mother;
    let fatherId = data.father;
    let eventId = data.id;
    let nodeId = data.nodeId;

    let mother = this.stage.findOne("#" + motherId);
    let father = this.stage.findOne("#" + fatherId);

    let positionY = this.stage.height() * (2 / 3) - this.yStep;
    

    if (mother && father) {
      let motherY = mother.y();
      let fatherY = father.y();

      let max = Math.min(motherY, fatherY) - this.yStep;
      positionY = max;
    } else if (father) {
      positionY = father.y() - this.yStep;
    } else if (mother) {
      positionY = mother.y() - this.yStep;
    }


    if (this.highestPointY > positionY) {
      this.highestPointY = positionY;
      this.alignedY = false;
    }

    let nodeIndex = this.nodes.indexOf(nodeId);

    let node = new Konva.Circle({
      x: nodeIndex * this.xStep,
      y: positionY,
      fill: "#fff",
      stroke: "#1b1d2c",
      strokeWidth: 1,
      radius: 2,
      name: eventId.toString(),
      listening: false,
      id: eventId.toString()
    });

    this.groupEvents.add(node);

    if (mother) {
      this._connectEventNodes(mother, node, "mother");
    }

    if (father) {
      this._connectEventNodes(father, node, "father");
    }

    if (data.stronglySeeing) this._makeNodeWitness(data);
    if (data.famous !== undefined) this._makeNodeFamous(data);
    this.lookupCreated.push(eventId)
  }

  _updateEventNode(data) {
    let eventId = data.id;
    if (this.stage.findOne("#" + eventId)) {
      if (data.stronglySeeing) this._makeNodeWitness(data);
      if (data.famous !== undefined) this._makeNodeFamous(data);
    }
  }

  _makeNodeWitness(data, fast) {
    let node = this.stage.findOne("#" + data.id);
    if (!node) return;

    if (data.stronglySeeing == true) {
      setTimeout(() => {
        new Konva.Tween({
          node,
          stroke: "#19a0ff",
          sides: 6,
          radius: 10,
          duration: 0.3
        }).play();
      }, 100);
    }
  }

  _makeNodeFamous(data, fast) {
    let node = this.stage.findOne("#" + data.id);
    if (!node) return;

    if (data.famous !== undefined) {
      setTimeout(() => {
        let node = this.stage.findOne("#" + data.id);
        if (node) {
          new Konva.Tween({
            node,
            stroke: data.famous ? "#00c9a7" : "#de4437",
            sides: 6,
            radius: 14,
            duration: 0.3
          }).play();
        }
      }, 500);
    }
  }

  _connectEventNodes(node1, node2, suffix) {
    if (!node1 || !node2) return;

    let lineNode = new Konva.Line({
      points: [node1.x(), node1.y(), node2.x(), node2.y()],
      // points: [node1.x(), node1.y(), node1.x(), node1.y()],
      stroke: "#999",
      opacity: 0.4,
      strokeWidth: 1,
      id: node1.id() + "_line" + suffix,
      listening: false,
      name: node1.id() + "_line" + " " + node2.id() + "_line"
    });

    this.groupLines.add(lineNode);

    // new Konva.Tween({
    //   node: lineNode,
    //   points: [node1.x(), node1.y(), node2.x(), node2.y()],
    //   duration: 0.15
    // }).play();
  }

  _autoScroll(frame) {
    // Y

    if (!this.alignedY) {
      let newY = -this.highestPointY + this.element.offsetHeight * (1 / 4);
      let currentY = this.layerMain.y();

      let frameDiff = (frame.timeDiff / 100) * 0.2;

      let diffY = newY - currentY;

      let targetY = currentY + diffY * frameDiff;

      if (Math.abs(targetY - currentY) < 0.3) {
        targetY = currentY;
        this.alignedY = true;
      }

      if (!this.aligned) {
        this.layerMain.y(currentY + diffY);
      } else {
        if (currentY != targetY) {
          this.layerMain.y(targetY);
        }
      }

      // Draw
      this.layerMain.batchDraw();
    }

    // X

    if (!this.alignedX) {
      let newX = this.element.offsetWidth / 2 - (this.nodesNumber / 2) * (this.xStep * this.layerMain.scaleX());
      let currentX = this.layerMain.x();
      let diffX = newX - currentX;
      this.layerMain.x(currentX + diffX);

      // Draw
      this.layerMain.batchDraw();
    }

    this.aligned = true;
  }

  _reset() {
    this.needReset = false;

    this.nodesNumber = 5;
    this.nodes = [];
    this.aligned = false;
    this.alignedX = false;
    this.alignedY = false;

    this.messageQueue = [];
    this.deleteQueue = [];
    this.stage.removeChildren();
    this.stage.clearCache();

    this.layerMain = new Konva.Layer({ listening: false });

    this.groupLines = new Konva.Group({ listening: false });
    this.groupEvents = new Konva.Group({ listening: false });
    this.groupLabels = new Konva.Group({ listening: false });

    this.layerMain.add(this.groupLines);
    this.layerMain.add(this.groupEvents);
    this.layerMain.add(this.groupLabels);

    this.stage.add(this.layerMain);

    this.lookup = [];
    this.lookupCreated = [];
    this.messageQueue = [];
    this.updateQueue = [];
    this.deleteQueue = [];
    this.highestPointY = 0;

    this.scroll();

    this.layerMain.batchDraw();
  }
}
