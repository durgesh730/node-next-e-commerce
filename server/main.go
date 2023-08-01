package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/durgesh730/authenticationInGo/database"
	"github.com/durgesh730/authenticationInGo/router"
	"github.com/gorilla/handlers"
	"github.com/joho/godotenv"
)

func main() {
    // env
	  errr := godotenv.Load()
	  if errr != nil {
		fmt.Println("Error connecting to mongoDB", errr)
		return
	}

	// connect database
	err := database.ConnectDB()
	if err != nil {
		fmt.Println("Error connecting to mongoDB", err)
		return
	}

	// connect router
	r := router.Router()

	//cors
	headersOk := handlers.AllowedHeaders([]string{"X-Requested-With", "Content-Type", "Authorization"})
	originsOk := handlers.AllowedOrigins([]string{"*"})
    methodsOk := handlers.AllowedMethods([]string{"GET", "HEAD", "POST", "PUT", "OPTIONS", "DELETE"})

	//start the server
	fmt.Println("server linstening on port http://localhost:4000")
	log.Fatal(http.ListenAndServe(":4000", handlers.CORS(originsOk, headersOk, methodsOk)(r)))
}
