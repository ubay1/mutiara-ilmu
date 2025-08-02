import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface IState {
  pageActive: string
  pathName: string
  setPageActive?: (value: string) => void
  setPathName?: (value: string) => void
  resetPage?: () => void
}

const initialState: IState = {
  pageActive: '',
  pathName: '',
}

export const usePageStore = create<IState>()(
  devtools(
    (set) => ({
      ...initialState,
      setPageActive: (value: string) => set(() => ({ pageActive: value })),
      setPathName: (value: string) => set(() => ({ pathName: value })),
      reset: () => set(initialState),
    }),
    {
      name: 'page',
    },
  ),
)
