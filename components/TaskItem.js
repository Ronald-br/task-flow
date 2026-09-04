import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles';

// Componente de item de tarefa: usa Flexbox (flexDirection row,
// justifyContent, alignItems) para organizar checkbox + texto + botão
// de excluir. Veja o estilo "taskItem" em styles.js para os comentários
// completos sobre o uso do Flexbox nesta seção.
export default function TaskItem({ task, priorities, onToggle, onDelete }) {
  const priorityInfo = priorities.find((p) => p.key === task.priority);

  return (
    <View style={styles.taskItem}>
      <View style={styles.taskLeft}>
        <TouchableOpacity
          style={[styles.checkbox, task.done && styles.checkboxChecked]}
          onPress={() => onToggle(task.id)}
        >
          {task.done && <Text style={styles.checkboxMark}>✓</Text>}
        </TouchableOpacity>

        {priorityInfo && (
          <View
            style={[styles.priorityDot, { backgroundColor: priorityInfo.color }]}
          />
        )}

        <Text
          style={[styles.taskText, task.done && styles.taskTextDone]}
          numberOfLines={2}
        >
          {task.text}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => onDelete(task.id)}
      >
        <Text style={styles.deleteButtonText}>✕</Text>
      </TouchableOpacity>
    </View>
  );
}