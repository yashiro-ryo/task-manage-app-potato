import React, { useState } from 'react'
import styled from 'styled-components'
import CardComp from './Card'
import CategoryAddButton from './CategoryAddButton'
import CategoryEditor from './CategoryEditor'
import TaskEditor from './TaskEditor'
import { groups } from '../etc/dummyData'
import { Group, TaskType } from '../values/task'

const Field = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  background-color: #cdffff;
  color: #000000;
  padding: 15px;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  overflow-x: auto;
`

export default function TaskField() {
  const [isCatEditorVisible, setCatEditorVisible] = useState(false)
  const [isTaskEditorVisible, setTaskEditorVisible] = useState(false)
  const [dragTarget, setDragTarget] = useState<{
    taskGroupId: number
    taskId: number
  }>()
  const [taskGroup, setTaskGroup] = useState<Array<Group>>(groups)
  const onClickAddCategory = (e: any) => {
    setCatEditorVisible(true)
  }

  // drag event
  const onDrag = (e: React.MouseEvent) => {
    //e.preventDefault;
    // のちにタスクの順番を変えたりするところで使用
  }

  // drag開始
  const onDragStart = (e: React.MouseEvent) => {
    const dragTaskId = e.currentTarget.getAttribute('data-task-id')
    if (dragTaskId == null) {
      return
    }
    const taskGroupId = e.currentTarget.getAttribute('data-task-group-id')
    if (taskGroupId === null) {
      return
    }
    console.log('dragged task group id = ', taskGroupId)
    console.log('dragged task id = ', dragTaskId)
    setDragTarget({
      taskGroupId: Number(taskGroupId),
      taskId: Number(dragTaskId),
    })
  }

  const onDragOver = (e: React.MouseEvent) => {
    e.preventDefault()
    const taskId = e.currentTarget.getAttribute('data-task-id')
    if (taskId !== null) {
      console.log(taskId)
    }
  }

  const onDrop = (e: React.MouseEvent) => {
    e.preventDefault()
    const dropZoneId = e.currentTarget.getAttribute('data-drop-zone-id')
    if (dropZoneId === null) {
      return
    }
    const taskGroupId = e.currentTarget.getAttribute('data-task-group-id')
    if (taskGroupId === null) {
      return
    }
    console.log('dropped at task group id = ', taskGroupId)
    console.log('dropされました drop group id = ', dropZoneId)
    moveTask(Number(taskGroupId), Number(dropZoneId))
  }

  const moveTask = (droppedTaskGroupId: number, dropZoneId: number) => {
    // drag target undefined チェック
    if (dragTarget === undefined) {
      return
    }
    let moveTargetTask: TaskType | null = null
    let copiedTaskGroups = taskGroup
    // dragする要素をtask配列から除去する
    copiedTaskGroups = copiedTaskGroups.map((group: Group) => {
      return {
        taskGroupId: group.taskGroupId,
        taskGroupText: group.taskGroupText,
        tasks: group.tasks.filter((task: TaskType) => {
          if (dragTarget.taskId === task.taskId) {
            moveTargetTask = {
              taskId: task.taskId,
              taskText: task.taskText,
              taskCreatedAt: task.taskCreatedAt,
              priority: task.priority,
            }
          }
          return dragTarget.taskId !== task.taskId
        }),
      }
    })
    // drop先のtasksにタスクを入れてやる
    copiedTaskGroups = copiedTaskGroups.map((group: Group) => {
      let copiedTasks = group.tasks
      if (group.taskGroupId === droppedTaskGroupId) {
        if (dropZoneId === 0) {
          copiedTasks = [moveTargetTask].concat(copiedTasks)
        } else if (dropZoneId === copiedTasks.length) {
          copiedTasks = copiedTasks.concat([moveTargetTask])
        } else {
          let start = copiedTasks.slice(0, dropZoneId)
          console.log('start', start)
          let end = copiedTasks.slice(dropZoneId)
          console.log('end', end)
          start = start.concat([moveTargetTask])
          copiedTasks = start.concat(end)
        }
      }
      return {
        taskGroupId: group.taskGroupId,
        taskGroupText: group.taskGroupText,
        tasks: copiedTasks,
      }
    })
    setTaskGroup(copiedTaskGroups)
  }

  return (
    <>
      <Field>
        {taskGroup.map((value: Group) => {
          return (
            <CardComp
              setTaskEditorVisible={setTaskEditorVisible}
              onDrag={onDrag}
              onDragStart={onDragStart}
              onDragOver={onDragOver}
              onDrop={onDrop}
              key={value.taskGroupId}
              taskGroup={value}
            />
          )
        })}
        <CategoryAddButton cb={onClickAddCategory} />
        <CategoryEditor isVisible={isCatEditorVisible} setVisible={setCatEditorVisible} />
        <TaskEditor isVisible={isTaskEditorVisible} setVisible={setTaskEditorVisible} />
      </Field>
    </>
  )
}
