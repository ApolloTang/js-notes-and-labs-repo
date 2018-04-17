#!/bin/bash

http-server ./resources -p 30304 &
browser-sync start --port '30303' --server 'src' --files 'src' --directory &
wait;



