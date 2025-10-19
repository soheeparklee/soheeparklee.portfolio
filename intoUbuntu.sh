#!/bin/bash

# Step 1: Go into folder with the key
echo "Navigating to folder with the key..."
cd ~/Desktop
cd ~/Downloads
cd drugstore-key

# Step 2: Connect to the server and execute commands
echo "Connecting to Ubuntu server: public IPv4 DNS and executing commands..."
ssh -i "DrugStoreKeyPair.pem" ubuntu@ec2-52-78-248-75.ap-northeast-2.compute.amazonaws.com 
