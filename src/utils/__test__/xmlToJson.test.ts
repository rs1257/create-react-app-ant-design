import { convertXmlToJson } from '../xmlToJson';

describe('Xml to Json', () => {
  it('should correctly convert xml to json', () => {
    const xml = `
    <body>
      <value>
        I am a value
      </value>
    </body>
    `;

    expect(convertXmlToJson(xml)).toEqual({ body: { value: 'I am a value' } });
  });
});
