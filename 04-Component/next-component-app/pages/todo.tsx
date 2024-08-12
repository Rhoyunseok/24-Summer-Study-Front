import { useState } from 'react';

import { ITodo, TodoType } from '@/interface/todo';

import TodoTemplate from '@/components/todo-template';
import TodoRegist from '@/components/todo-regist';
import TodoList from '@/components/todo-list';

const Todo = () => {
  //단일 할일정보 상태 정의하기
  const [todo, setTodo] = useState<TodoType>({
    title: '',
    desc: '',
    selected: false,
  });
  //할일목록 상태 정의하기 및 초기화
  const [todos, setTodos] = useState<TodoType[]>([]);

  //할일 등록 텍스트박스 변경이벤트 처리함수
  const todoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({
      ...todo,
      title: e.target.value,
    });
  };

  //단일 할일정보 저장 이벤트 처리 함수
  const onSave = () => {
    //할일목록에 신규 할일객체 추가하기
    setTodos([...todos, todo]);
  };

  const removeItem = (index: number) => {
    const filteredTodos = todos.filter(
      (item: TodoType, i: number) => i !== index,
    );

    //할일목록에서 선택한 할일객체 삭제하기
    setTodos(todos.filter((item: TodoType, i: number) => i !== index));
    setTodos(filteredTodos);
  };

  return (
    <TodoTemplate>
      <TodoRegist todo={todo} todoChange={todoChange} onSave={onSave} />
      <TodoList todos={todos} removeItem={removeItem} />
    </TodoTemplate>
  );
};

export default Todo;
