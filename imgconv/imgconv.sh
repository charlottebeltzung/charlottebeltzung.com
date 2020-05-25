#!/bin/bash
# find ./ -type f -iname "*.jpeg" -exec mogrify -verbose -format jpeg -layers Dispose -resize 1100\>x {} +
find ./ -type f -iname "*.jpg" -exec mogrify -verbose -format jpg -layers Dispose -resize 1100\>x {} +
