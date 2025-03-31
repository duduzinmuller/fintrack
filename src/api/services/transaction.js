import { protectedApi } from '@/lib/axios'

export const TransactionService = {
  /**
   * Cria uma transação para o usuario autenticado
   * @param {Object} input
   * @param {Object} input.name - Nome da transação
   * @param {Object} input.date - Data da transação (YYYY-MM-DD)
   * @param {Object} input.amount - Valor da transação
   * @param {Object} input.type - Tipo da transação (EARNING, EXPENSE or INVESTMENT)
   *
   */
  create: async (input) => {
    const response = await protectedApi.post('/transactions/me', {
      name: input.name,
      date: input.date,
      amount: input.amount,
      type: input.type,
    })
    return response.data
  },
}
