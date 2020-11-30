import {useState} from 'react';

const useTags = () => {
  const [tags, setTags] = useState<string[]>(['衣服', '吃饭', '住宿', '出行']);
  return {tags, setTags};
};

export {useTags};