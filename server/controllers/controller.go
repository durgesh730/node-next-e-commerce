package controllers

import (
	"context"
	"encoding/json"
	"net/http"
	"time"

	"github.com/durgesh730/authenticationInGo/database"
	"github.com/durgesh730/authenticationInGo/helper"
	"github.com/durgesh730/authenticationInGo/models"
	"go.mongodb.org/mongo-driver/bson"
)

func RegisterUser(w http.ResponseWriter, r *http.Request) {
	// Parse the user registration data from the request body
	var user models.User
	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		http.Error(w, "Invalid request", http.StatusBadRequest)
	}

	// Check if the user already exists in MongoDB
	filter := bson.M{"Email": user.Email}
	count, err := database.SaveData.CountDocuments(context.Background(), filter)
	if err != nil {
		http.Error(w, "Invalid request", http.StatusBadRequest)
		return
	}

	if count > 0 {
		http.Error(w, "User already exist", http.StatusConflict)
		return
	} else {
		// Hash the user's password before storing it
		hashedPassword, err := helper.HashPassword(user.Password)
		if err != nil {
			http.Error(w, "Failed to insert data into MongoDB", http.StatusInternalServerError)
			return
		}
		user.Password = hashedPassword

		// Insert the user data into MongoDB
		Userdata, err := database.SaveData.InsertOne(context.Background(), user)

		if err != nil {
			http.Error(w, "Failed to insert data into MongoDB", http.StatusInternalServerError)
			return
		}

		// Sign the token with the secret key
		tokenString, _ := helper.GererateToken(Userdata.InsertedID)

		//cookie
		cookie := http.Cookie{
			Name:     "token",
			Value:    tokenString,
			Expires:  time.Now().Add(time.Hour * 24), // token will expire in 24 hours
			HttpOnly: true,
		}
		http.SetCookie(w, &cookie)

		// Respond with the success message
		reponse := make(map[string]interface{})
		reponse["token"] = tokenString
		reponse["_id"] = Userdata.InsertedID
		reponse["msg"] = "user successfully register"

		json.NewEncoder(w).Encode(reponse)
	}
}

func LoginUser(w http.ResponseWriter, r *http.Request) {
	// Parse the user registration data from the request body
	var user models.User
	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		http.Error(w, "Invalid request", http.StatusBadRequest)
	}

	// find the user by email  in mongodb
	// var d models.User
	filter := bson.M{"Email": user.Email}
	dat := database.SaveData.FindOne(context.Background(), filter).Decode(&user)
	if dat != nil {
		http.Error(w, "Email not found", http.StatusNotFound)
		return
	}

	// Sign the token with the secret key
	tokenString, _ := helper.GererateToken(user.Id)

	//cookie
	cookie := http.Cookie{
		Name:     "token",
		Value:    tokenString,
		Expires:  time.Now().Add(time.Hour * 24), // token will expire in 24 hours
		HttpOnly: true,
	}
	http.SetCookie(w, &cookie)

	// Respond with the success message
	response := make(map[string]interface{})
	response["token"] = tokenString
	response["msg"] = "User successfully logged In"
	response["user"] = user

	json.NewEncoder(w).Encode(response)
}
