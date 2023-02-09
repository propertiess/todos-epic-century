export type IFilter = 'all' | 'checked' | 'unchecked';

export type ITodo = {
  id: number;
  checked: boolean;
  title: string;
  timeDone: number | null;
};

export type ITab = {
  icon: JSX.Element;
  type: IFilter;
};
