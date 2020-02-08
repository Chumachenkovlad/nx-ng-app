module.exports = {
  name: 'specialappname-panel',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/specialappname-panel',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
