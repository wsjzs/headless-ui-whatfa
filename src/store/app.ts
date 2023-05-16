import {create }from 'zustand'


export interface ViewPort{
  isMobile: boolean
}
export interface AppStore{
  viewPort:ViewPort
}

export interface AppAction{
  updateViewPort:()=>void
}

const createDefaultStore=()=>({
  viewPort:{
    isMobile:false
  }
})

const defaultAppStore=createDefaultStore()

const useAppStore=create<AppStore&AppAction>()(set=>({
  ...defaultAppStore,
  updateViewPort:()=>set(()=>({viewPort:{isMobile:window.screen.width <= 568 || window.innerWidth <= 568,}}))
}))

export default useAppStore