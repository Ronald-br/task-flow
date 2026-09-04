import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from 'react-native';
import { styles, colors } from './styles';
import TaskItem from './components/TaskItem';

const FILTERS = [
  { key: 'all', label: 'Todas' },
  { key: 'pending', label: 'Pendentes' },
  { key: 'done', label: 'Concluídas' },
];

const PRIORITIES = [
  { key: 'baixa', label: 'Baixa', color: '#00C9A7' },
  { key: 'media', label: 'Média', color: '#FFB020' },
  { key: 'alta', label: 'Alta', color: '#FF5C5C' },
];

export default function App() {
  const [tasks, setTasks] = useState([
    { id: '1', text: 'Estudar Flexbox no React Native', done: true, priority: 'media' },
    { id: '2', text: 'Separar estilos em StyleSheet.create()', done: true, priority: 'baixa' },
    { id: '3', text: 'Testar o app em telas diferentes', done: false, priority: 'alta' },
    { id: '4', text: 'Subir o projeto no GitHub', done: false, priority: 'media' },
  ]);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');
  // ESTADO 4: guarda a prioridade escolhida para a próxima tarefa a ser
  // criada. É atualizado pelo evento de clique nos chips de prioridade
  // (handlePriorityPress) e consumido quando a tarefa é adicionada.
  const [newPriority, setNewPriority] = useState('media');

  const addTask = () => {
    const text = newTask.trim();
    if (!text) return;
    setTasks((prev) => [
      { id: Date.now().toString(), text, done: false, priority: newPriority },
      ...prev,
    ]);
    setNewTask('');
    setNewPriority('media');
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const clearCompleted = () => {
    setTasks((prev) => prev.filter((t) => !t.done));
  };

  const filteredTasks = tasks.filter((t) => {
    if (filter === 'pending') return !t.done;
    if (filter === 'done') return t.done;
    return true;
  });

  const total = tasks.length;
  const doneCount = tasks.filter((t) => t.done).length;
  const pendingCount = total - doneCount;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Task Flow</Text>
        <Text style={styles.headerSubtitle}>
          Organize seu dia com foco e simplicidade
        </Text>
      </View>

      {/* SEÇÃO 1 COM FLEXBOX: BARRA DE ESTATÍSTICAS (row + space-between + center) */}
      <View style={styles.statsBar}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{total}</Text>
          <Text style={styles.statLabel}>Total</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{pendingCount}</Text>
          <Text style={styles.statLabel}>Pendentes</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{doneCount}</Text>
          <Text style={styles.statLabel}>Concluídas</Text>
        </View>
      </View>

      {/*
        RENDERIZAÇÃO CONDICIONAL 1: o banner de parabéns só é renderizado
        quando existe pelo menos uma tarefa (total > 0) E todas estão
        concluídas (doneCount === total). Usamos "&&" para renderizar o
        componente apenas quando a condição é verdadeira, senão nada é
        exibido nesse espaço.
      */}
      {total > 0 && doneCount === total && (
        <View style={styles.congratsBanner}>
          <Text style={styles.congratsText}>
            🎉 Você concluiu todas as suas tarefas!
          </Text>
        </View>
      )}

      {/* FILTROS (row + flexWrap, se adapta a telas estreitas) */}
      <View style={styles.filterRow}>
        {FILTERS.map((f) => (
          <TouchableOpacity
            key={f.key}
            style={[
              styles.filterChip,
              filter === f.key && styles.filterChipActive,
            ]}
            onPress={() => setFilter(f.key)}
          >
            <Text
              style={[
                styles.filterChipText,
                filter === f.key && styles.filterChipTextActive,
              ]}
            >
              {f.label}
            </Text>
          </TouchableOpacity>
        ))}

        {/*
          RENDERIZAÇÃO CONDICIONAL 2: usamos o operador ternário para
          renderizar o botão "Limpar concluídas" apenas quando existe pelo
          menos uma tarefa concluída (doneCount > 0). Se não houver
          nenhuma, renderizamos "null" e nada aparece nesse lugar da tela.
        */}
        {doneCount > 0 ? (
          <TouchableOpacity style={styles.clearButton} onPress={clearCompleted}>
            <Text style={styles.clearButtonText}>Limpar concluídas</Text>
          </TouchableOpacity>
        ) : null}
      </View>

      {/*
        ESTADO 4 + EVENTO DE INTERAÇÃO: seletor de prioridade. Cada chip é
        um TouchableOpacity; ao ser pressionado, chama setNewPriority(p.key)
        (evento onPress), atualizando o estado newPriority. O chip
        selecionado é destacado comparando newPriority === p.key.
      */}
      <View style={styles.priorityRow}>
        <Text style={styles.priorityLabel}>Prioridade:</Text>
        {PRIORITIES.map((p) => (
          <TouchableOpacity
            key={p.key}
            style={[
              styles.priorityChip,
              newPriority === p.key && {
                backgroundColor: p.color,
                borderColor: p.color,
              },
            ]}
            onPress={() => setNewPriority(p.key)}
          >
            <Text
              style={[
                styles.priorityChipText,
                newPriority === p.key && styles.priorityChipTextActive,
              ]}
            >
              {p.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* INPUT PARA NOVA TAREFA */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="Adicionar nova tarefa..."
            placeholderTextColor={colors.textSecondary}
            value={newTask}
            onChangeText={setNewTask}
            onSubmitEditing={addTask}
            returnKeyType="done"
          />
          <TouchableOpacity style={styles.addButton} onPress={addTask}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>

      {/* SEÇÃO 2 COM FLEXBOX: LISTA DE TAREFAS (cada item usa row) */}
      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            priorities={PRIORITIES}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        )}
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateText}>
              Nenhuma tarefa aqui. Adicione uma tarefa nova acima!
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}