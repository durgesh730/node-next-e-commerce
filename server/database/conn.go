package database

import (
	"context"
	"fmt"
	"os"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var SaveData *mongo.Collection

func ConnectDB() error {
	 db :=  os.Getenv("DB")
	clientOption := options.Client().ApplyURI(db)
	client, err := mongo.Connect(context.TODO(), clientOption)

	if err != nil {
		return err
	}
	fmt.Println("Database connected")
	SaveData = client.Database("Next").Collection("e-commerce")

	return nil
}
