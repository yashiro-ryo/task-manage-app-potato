export type Group = {
  taskGroupId: number;
  taskGroupText: string;
  // anyは滅ぼす
  tasks: any;
};

export type TaskType = {
  taskId: number;
  taskText: string;
  teskCreatedAt: string;
  priority: string;
};
