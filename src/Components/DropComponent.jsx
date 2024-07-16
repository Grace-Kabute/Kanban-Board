import { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Box } from '@mui/material';
import ProjectBoard from './ProjectBoard';

const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Create login endpoint' },
    'task-2': { id: 'task-2', content: 'Prepare for interview' },
    'task-3': { id: 'task-3', content: 'Write documentation' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Proposed',
      taskIds: ['task-1', 'task-2'],
    },
    'column-2': {
      id: 'column-2',
      title: 'In Progress',
      taskIds: ['task-3'],
    },
    'column-3': {
      id: 'column-3',
      title: 'In reviews',
      taskIds: ['task-3'],
    },
    'column-4': {
      id: 'column-4',
      title: 'Done',
      taskIds: [],
    },
  },
  columnOrder: ['column-1', 'column-2', 'column-3', 'column-4'],
};

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

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Box display="flex" justifyContent="space-between">
        {data.columnOrder.map((columnId) => {
          const column = data.columns[columnId];
          const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

          return <ProjectBoard key={column.id} column={column} tasks={tasks} />;
        })}
      </Box>
    </DragDropContext>
  );
};

export default DropComponent;
