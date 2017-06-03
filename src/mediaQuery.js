const STRING = 'string'
const NUMBER = 'number'
const BOOL = 'boolean'

const stringOrNumber = [
  STRING,
  NUMBER
]

// properties that match media queries
const matchers = {
  orientation: [
    'portrait',
    'landscape'
  ],

  scan: [
    'progressive',
    'interlace'
  ],

  aspectRatio: STRING,
  deviceAspectRatio: STRING,

  height: stringOrNumber,
  deviceHeight: stringOrNumber,

  width: stringOrNumber,
  deviceWidth: stringOrNumber,

  color: BOOL,

  colorIndex: BOOL,

  monochrome: BOOL,
  resolution: stringOrNumber
}

// media features
const features = {
  minAspectRatio: STRING,
  maxAspectRatio: STRING,
  minDeviceAspectRatio: STRING,
  maxDeviceAspectRatio: STRING,

  minHeight: stringOrNumber,
  maxHeight: stringOrNumber,
  minDeviceHeight: stringOrNumber,
  maxDeviceHeight: stringOrNumber,

  minWidth: stringOrNumber,
  maxWidth: stringOrNumber,
  minDeviceWidth: stringOrNumber,
  maxDeviceWidth: stringOrNumber,

  minColor: NUMBER,
  maxColor: NUMBER,

  minColorIndex: NUMBER,
  maxColorIndex: NUMBER,

  minMonochrome: NUMBER,
  maxMonochrome: NUMBER,

  minResolution: stringOrNumber,
  maxResolution: stringOrNumber,

  ...matchers
}

// media types
const types = {
  all: BOOL,
  grid: BOOL,
  aural: BOOL,
  braille: BOOL,
  handheld: BOOL,
  print: BOOL,
  projection: BOOL,
  screen: BOOL,
  tty: BOOL,
  tv: BOOL,
  embossed: BOOL
}

const all = { ...types, ...features }

// add the type property
matchers.type = Object.keys(types)

export default {
  all: all,
  types: types,
  matchers: matchers,
  features: features
}
