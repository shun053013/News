import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        drawer:false,
        login_user:null
    
    },
    mutations:{
        toggleSideMenu(state){
            state.drawer= !state.drawer
        },
        setLoginUser(state,user){
            state.login_user=user
        },
        deleteLoginUser(state){
            state.login_user = null
        }
        
    },
    actions:{
        login(){
            const google_auth_provider = new firebase.auth.GoogleAuthProvider()
            firebase.auth().signInWithRedirect(google_auth_provider)
        },
        toggleSideMenu({commit}){
            commit('toggleSideMenu')
        },
        setLoginUser({commit},user){
            commit('setLoginUser',user)
        },
        logout(){
            firebase.auth().signOut()
        },
        deleteLoginUser({commit},){
            commit('deleteLoginUser')

        }
        
    },
    getters:{
        userName:state => state.login_user ? state.login_user.displayName :'',
        photoURL:state => state.login_user ? state.login_user.photoURL:''
    }
})