import { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Box } from '@mui/material';
import ProjectBoard from './ProjectBoard';
import ModalComponent from './ModalComponent';
import { v4 as uuidv4 } from 'uuid';
import Project from './Project';
import initialData from '../Utils/Data'


const DropComponent = () => {
  const [data, setData] = useState(initialData);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const startColumn = data.columns[source.droppableId];
    const endColumn = data.columns[destination.droppableId];

    if (startColumn === endColumn) {
      const newTaskIds = Array.from(startColumn.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...startColumn,
        taskIds: newTaskIds,
      };

      const newState = {
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        },
      };

      setData(newState);
      return;
    }

    const startTaskIds = Array.from(startColumn.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStartColumn = {
      ...startColumn,
      taskIds: startTaskIds,
    };

    const endTaskIds = Array.from(endColumn.taskIds);
    endTaskIds.splice(destination.index, 0, draggableId);
    const newEndColumn = {
      ...endColumn,
      taskIds: endTaskIds,
    };

    const newState = {
      ...data,
      columns: {
        ...data.columns,
        [newStartColumn.id]: newStartColumn,
        [newEndColumn.id]: newEndColumn,
      },
    };

    setData(newState);
  };

  const addTask = (content) => {
    const newTaskId = uuidv4();
    const newTask = { id: newTaskId, content };

    const newTasks = {
      ...data.tasks,
      [newTaskId]: newTask,
    };

    const firstColumn = data.columns['column-1'];
    const newTaskIds = [...firstColumn.taskIds, newTaskId];
    const newColumn = {
      ...firstColumn,
      taskIds: newTaskIds,
    };

    const newState = {
      ...data,
      tasks: newTasks,
      columns: {
        ...data.columns,
        [newColumn.id]: newColumn,
      },
    };

    setData(newState);
  };

  const deleteTask = (taskId) => {
    const newTasks = { ...data.tasks };
    delete newTasks[taskId];

    const newColumns = { ...data.columns };
    Object.keys(newColumns).forEach(columnId => {
      const column = newColumns[columnId];
      column.taskIds = column.taskIds.filter(id => id !== taskId);
    });

    const newState = {
      ...data,
      tasks: newTasks,
      columns: newColumns,
    };

    setData(newState);
  };

  return (
    <Box >
      <ModalComponent buttonText="Add Task" onAdd={addTask} use="Task" />
      <Project ProjectName='Constock'/>
      <DragDropContext onDragEnd={onDragEnd}>
        <Box display="flex" justifyContent="space-between" gap="2em" overflowX="auto">
          {data.columnOrder.map((columnId) => {
            const column = data.columns[columnId];
            const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

            return <ProjectBoard key={column.id} column={column} tasks={tasks} deleteTask={deleteTask} />;
          })}
        </Box>
      </DragDropContext>
    </Box>
  );
};

export default DropComponent;
