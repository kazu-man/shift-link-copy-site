  uniform vec2 uPlaneSize;
  uniform vec2 uImageSize;
  uniform float uTime;
  uniform sampler2D uTexture;
  varying vec2 vUv;

  void main() {
    // apply image texture
    vec4 color = texture2D(uTexture, vUv);
    color.w = 0.7;

    gl_FragColor = color;
  }