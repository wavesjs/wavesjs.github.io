'use strict';

var timeline = waves.ui.timeline;
var segment  = waves.ui.segment;
var waveform = waves.ui.waveform;
var marker   = waves.ui.marker;
var label    = waves.ui.label;
var zoomer   = waves.ui.zoomer;
var d3 = timeline.d3;
// var audioContext = require('audio-context');
var BufferLoader = waves.loaders.AudioBufferLoader;

// var Transport = require('transport');
// var GranularEngine = require('granular-engine');
// var PlayControl = require('play-control');

var waveformColor = '#586e75';
var anchorColor = '#657b83';
var segmentColor = '#cb4b16';
// var cursorColor = '#dc322f';

var filePath = '../assets/drum-loop.wav';

var graphWidth = 800;

var segmentData = [
  {
    start: 0.3,
    duration: 0.4,
    text: 'label 1'
  }, {
    start: 2,
    duration: 0.5,
    text: 'label 2'
  }
];

// load a sound file to display
var bufferLoader = new BufferLoader();

bufferLoader.load(filePath).then(
  function(buffer) {
    // add a try/catch to work around promises error throwing
    try {
      drawGraph(buffer);
    } catch (err) {
      console.error(err.stack);
    }
  },
  function(err) {
    console.error(err);
  }
);

var drawGraph = function(buffer) {
  // 1. create the graph / timeline
  // ----------------------------------------
  var graph = timeline()
    .xDomain([0, buffer.duration])
    .width(graphWidth)
    .height(200)

  // 2. create the waveform visualizer
  // ----------------------------------------
  var waveformLayer = waveform()
    .params({ renderingStrategy: 'svg' })
    .data(buffer.getChannelData(0).buffer)
    .sampleRate(buffer.sampleRate)
    .color(waveformColor);

  // 3. create an anchor for zooming
  // ----------------------------------------
  var anchor = new marker()
    .params({ displayHandle: false })
    .color(anchorColor)
    .opacity(0.9);

  // 4. create some segments
  // ----------------------------------------
  // override layer selection handle
  var segmentLayer = segment()
    .params({
      interactions: { editable: true },
      opacity: 0.3,
      handlerOpacity: 0.5
    })
    .data(segmentData)
    .color(segmentColor);


  var labelLayer = label()
    .data(segmentData)
    .x(function(d, v) { return d.start; })
    .y(0)
    .width(function(d, v) { return d.duration; })
    .height(1)
    .margin({ top: 2, right: 0, bottom: 0, left: 4 })
    .bgColor('none')
    .color('#686868');

  segmentLayer.on('drag', function(item, e) {
    graph.update(labelLayer);
  });

  // 5. create cursor
  // ----------------------------------------
  // var cursor = new marker()
  //   .params({ displayHandle: false })
  //   .color(cursorColor)
  //   .opacity(0.9);

  // 6. add all the components to the graph
  // ----------------------------------------
  graph.add(waveformLayer);
  graph.add(segmentLayer);
  graph.add(labelLayer);
  graph.add(anchor);
  // graph.add(cursor);

  // 6. draw the timeline and all its components
  // ----------------------------------------
  d3.select('#timeline').call(graph.draw);

  // adding zooming ability
  // ----------------------------------------
  // create a svg element for the zoomer
  var zoomerSvg = d3.select('#zoomer').append('svg')
    .attr('width', graphWidth)
    .attr('height', 30);

  // create the time axis - here a common d3 axis
  // graph must be drawn in order to have `graph.xScale` up to date
  var xAxis = d3.svg.axis()
    .scale(graph.xScale)
    .tickSize(1)
    .tickFormat(function(d) {
      var form = d % 1 === 0 ? '%S' : '%S:%L';
      var date = new Date(d * 1000);
      var format = d3.time.format(form);
      return format(date);
    });

  // add the axis to the newly created svg element
  var axis = zoomerSvg.append('g')
    .attr('class', 'x-axis')
    .attr('transform', 'translate(0, 0)')
    .attr('fill', '#555')
    .call(xAxis);

  // instanciate the zoomer layer
  var zoom = zoomer()
    .select('#zoomer')
    .on('mousedown', function(e) {
      var xDomainPos = graph.xScale.invert(e.anchor);
      anchor.setCurrentTime(xDomainPos);
      graph.update(anchor);
    })
    .on('mousemove', function(e) {
      e.originalEvent.preventDefault();
      // update anchor position
      var xDomainPos = graph.originalXscale.invert(e.anchor);
      anchor.setCurrentTime(xDomainPos).draw();
      // update graph xZoom
      graph.xZoom(e);
      // redraw the axis to keep it up to date with the graph
      axis.call(xAxis);
    })
    .on('mouseup', function(e) {
      // set the final xZoom value of the graph
      graph.xZoomSet();
      // update axis with the new graph xScale
      xAxis.scale(graph.xScale);
      // update axis
      axis.call(xAxis);
    });
  // */

  // // AUDIO
  // var currentTime = 0;
  // var transport = new Transport();
  // var playControl = new PlayControl(transport);
  // var granularEngine = new GranularEngine(buffer);

  // transport.add(granularEngine, 0, buffer.duration, 0);
  // granularEngine.connect(audioContext.destination);

  // // controls
  // document.querySelector('.play').addEventListener('click', function(e) {
  //   e.preventDefault();
  //   playControl.seek(currentTime);
  //   playControl.start();
  // });

  // document.querySelector('.pause').addEventListener('click', function(e) {
  //   e.preventDefault();
  //   playControl.pause();
  // });

  // document.querySelector('#speed').addEventListener('input', function(e) {
  //   e.preventDefault();
  //   playControl.speed = parseFloat(this.value, 10);
  // });

  // // keep cursor up to date
  // (function loop() {
  //   currentTime = playControl.currentPosition;
  //   cursor.setCurrentTime(currentTime);
  //   graph.update(cursor);

  //   requestAnimationFrame(loop);
  // }());
};