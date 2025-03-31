import { useQuery } from '@tanstack/react-query'
import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from 'lucide-react'
import { useSearchParams } from 'react-router'

import { useAuthContext } from '@/contexts/auth'
import { UserService } from '@/services/user'

import BalanceItem from './balance-item'

const Balance = () => {
  const [searchParams] = useSearchParams()
  const { user } = useAuthContext()
  const from = searchParams.get('from') // YYYY-MM-DD
  const to = searchParams.get('to') // YYYY-MM-DD
  const { data } = useQuery({
    queryKey: ['balance', user.id, from, to],
    queryFn: () => {
      return UserService.getBalance({ from, to })
    },
    staleTime: 1000 * 60 * 5, //5 minutos
    enabled: Boolean(from) && Boolean(to) && Boolean(user.id),
  })
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-6">
      <BalanceItem
        label="Saldo"
        amount={data?.saldo}
        icon={<WalletIcon size={16} />}
      />
      <BalanceItem
        label="Ganhos"
        amount={data?.ganhos}
        icon={<TrendingUpIcon className="text-primary-green" size={16} />}
      />
      <BalanceItem
        label="Gastos"
        amount={data?.despesas}
        icon={<TrendingDownIcon className="text-primary-red" size={16} />}
      />
      <BalanceItem
        label="Investimentos"
        amount={data?.investimentos}
        icon={<PiggyBankIcon className="text-primary-blue" size={16} />}
      />
    </div>
  )
}

export default Balance
