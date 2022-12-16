import { XMLParser } from 'fast-xml-parser';

export const convertXmlToJson = <T>(xml: string): T => {
  return new XMLParser().parse(xml) as T;
};
