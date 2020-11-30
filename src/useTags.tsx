import {useState} from 'react';
import {createId} from './lib/createId';

const defaultTags = [
  {id: createId(), name: '衣服'},
  {id: createId(), name: '吃饭'},
  {id: createId(), name: '住宿'},
  {id: createId(), name: '出行'},
];
const useTags = () => { // 封装一个自定义 Hook
  const [tags, setTags] = useState<{ id: number; name: string }[]>(defaultTags);
  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
  return {tags, setTags, findTag};
};

export {useTags};