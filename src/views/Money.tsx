import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';

const LabelSection = styled.div`
  
`
const NoteSection = styled.div`
  
`
const CategorySection = styled.div`
  
`
const NumberPadSection = styled.div`
  
`

function Money() {
  return (
    <Layout>
      <LabelSection>
        <ol>
          <li>衣服</li>
          <li>食物</li>
          <li>住宿</li>
          <li>出行</li>
        </ol>
        <button>新增标签</button>
      </LabelSection>
      <NoteSection>
        <label>
          <span>备注</span>
          <input type="text"/>
        </label>
      </NoteSection>
      <CategorySection>
        <ul>
          <li>支出</li>
          <li>收入</li>
        </ul>
      </CategorySection>
      <NumberPadSection>
        <div>100</div>
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>ok</button>
          <button>0</button>
          <button>.</button>
        </div>
      </NumberPadSection>
    </Layout>);
}

export default Money;