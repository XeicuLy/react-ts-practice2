import { TodoType } from '../types/todo';

export const Todo = ({ userId, title, completed }: Omit<TodoType, 'id'>) => {
  const completeMark = completed ? '[完]' : '[未]';

  return <p>{`${completeMark} ${title}(ユーザー:${userId})`}</p>;
};
