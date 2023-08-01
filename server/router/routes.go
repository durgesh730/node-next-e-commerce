package router

import (
	"github.com/durgesh730/authenticationInGo/controllers"
	"github.com/gorilla/mux"
)

func Router() *mux.Router{
	router := mux.NewRouter()
 
	router.HandleFunc("/user/signup", controllers.RegisterUser).Methods("POST")
	router.HandleFunc("/user/login", controllers.LoginUser).Methods("POST")

	return router
}