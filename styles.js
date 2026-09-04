import { StyleSheet, Dimensions, Platform } from 'react-native';

// Responsividade básica: pegamos a largura da tela para ajustar
// tamanhos de fonte/espaçamentos em telas pequenas (ex: celulares antigos)
// versus telas maiores (ex: tablets).
const { width } = Dimensions.get('window');
const isSmallScreen = width < 360;
const isLargeScreen = width >= 600; // tablets

// Paleta de cores coerente com o propósito do app (produtividade / foco)
export const colors = {
  background: '#F4F7FB',
  primary: '#3D5AFE',
  primaryDark: '#2A3EB1',
  secondary: '#00C9A7',
  danger: '#FF5C5C',
  textPrimary: '#1B1F3B',
  textSecondary: '#6B7280',
  card: '#FFFFFF',
  border: '#E4E8F0',
  white: '#FFFFFF',
};

export const styles = StyleSheet.create({
  // Container geral: ocupa toda a tela e organiza em coluna
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  // ---------- HEADER ----------
  header: {
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
    paddingBottom: 20,
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerTitle: {
    fontSize: isSmallScreen ? 22 : isLargeScreen ? 32 : 26,
    fontWeight: '700',
    color: colors.white,
  },
  headerSubtitle: {
    fontSize: isSmallScreen ? 12 : 14,
    color: '#DCE3FF',
    marginTop: 4,
  },

  // ---------- SEÇÃO 1 COM FLEXBOX CONSCIENTE: BARRA DE ESTATÍSTICAS ----------
  statsBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: -30,
    marginHorizontal: 20,
    backgroundColor: colors.card,
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: isSmallScreen ? 8 : 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statDivider: {
    width: 1,
    height: '70%',
    backgroundColor: colors.border,
  },
  statNumber: {
    fontSize: isSmallScreen ? 18 : 22,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  statLabel: {
    fontSize: isSmallScreen ? 10 : 12,
    color: colors.textSecondary,
    marginTop: 2,
  },

  // ---------- BANNER DE PARABÉNS (renderização condicional) ----------
  congratsBanner: {
    marginHorizontal: 20,
    marginTop: 16,
    backgroundColor: '#E6FBF6',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: colors.secondary,
  },
  congratsText: {
    fontSize: isSmallScreen ? 13 : 14,
    fontWeight: '600',
    color: colors.primaryDark,
    textAlign: 'center',
  },

  // ---------- BOTÃO LIMPAR CONCLUÍDAS (renderização condicional) ----------
  clearButton: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: '#FFF1F1',
    borderWidth: 1,
    borderColor: colors.danger,
    marginBottom: 8,
  },
  clearButtonText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.danger,
  },

  // ---------- FILTROS (flexWrap para telas pequenas) ----------
  filterRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 24,
    gap: 8,
  },
  filterChip: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    marginRight: 8,
    marginBottom: 8,
  },
  filterChipActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  filterChipText: {
    fontSize: 13,
    color: colors.textSecondary,
    fontWeight: '600',
  },
  filterChipTextActive: {
    color: colors.white,
  },

  // ---------- SELETOR DE PRIORIDADE (estado + evento) ----------
  priorityRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 16,
    gap: 8,
  },
  priorityLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    marginRight: 4,
    fontWeight: '600',
  },
  priorityChip: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
  },
  priorityChipText: {
    fontSize: 12,
    color: colors.textSecondary,
    fontWeight: '600',
  },
  priorityChipTextActive: {
    color: colors.white,
  },
  priorityDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 8,
  },

  // ---------- INPUT PARA NOVA TAREFA ----------
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 16,
    marginBottom: 8,
  },
  input: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: isSmallScreen ? 10 : 14,
    fontSize: isSmallScreen ? 14 : 16,
    color: colors.textPrimary,
    borderWidth: 1,
    borderColor: colors.border,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: colors.primary,
    width: isSmallScreen ? 42 : 50,
    height: isSmallScreen ? 42 : 50,
    borderRadius: isSmallScreen ? 21 : 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: colors.white,
    fontSize: isSmallScreen ? 20 : 24,
    fontWeight: '700',
    marginTop: -2,
  },

  // ---------- LISTA DE TAREFAS ----------
  listContent: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 40,
  },

  // ---------- SEÇÃO 2 COM FLEXBOX CONSCIENTE: ITEM DE TAREFA ----------
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.card,
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: colors.border,
  },
  taskLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  checkboxChecked: {
    backgroundColor: colors.secondary,
    borderColor: colors.secondary,
  },
  checkboxMark: {
    color: colors.white,
    fontSize: 12,
    fontWeight: '700',
  },
  taskText: {
    flex: 1,
    fontSize: isSmallScreen ? 14 : 16,
    color: colors.textPrimary,
  },
  taskTextDone: {
    color: colors.textSecondary,
    textDecorationLine: 'line-through',
  },
  deleteButton: {
    paddingLeft: 10,
  },
  deleteButtonText: {
    fontSize: 18,
    color: colors.danger,
  },

  // ---------- ESTADO VAZIO ----------
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
  },
  emptyStateText: {
    fontSize: 15,
    color: colors.textSecondary,
    textAlign: 'center',
  },
});