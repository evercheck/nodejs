#!/usr/bin/env bash

gw=192.168.76.0
devicesName="a50\|mi8"


file=address.txt

function getAllDevices() {
    nmap -sP $gw/24 > $file
    cat $file
    cat $file | grep $devicesName > $file
}

function getAddress() {
    name=$1
    row=$(cat $file | grep $name)
    [[ $row =~ ^.*\((.*)\) ]]
    echo ${BASH_REMATCH[1]}
}

function connect() {
    adb connect $(getAddress $1):5555
}

#Usage: $sh devices.sh connect <NAME>
"$@"
#connect $1
