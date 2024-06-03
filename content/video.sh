#!/bin/bash

# Function to replace the word "Videos" with "Videoss" in a file
replace_word_in_file() {
    local file=$1
    local temp_file=$(mktemp) # Create a temporary file

    # Check if the file contains the word "Indonesia"
    if grep -q "Indonesia" "$file"; then
        # Replace "Indonesia" with "Indonesia" and write to temporary file
        awk '{gsub(/Indonesia/, "Indonesia")}1' "$file" > "$temp_file"
        mv "$temp_file" "$file" # Replace original file with temporary file
        echo "Modified: $file"
    else
        echo "Skipped: $file"
    fi
}

# Iterate over all files in the current directory
for file in *; do
    if [ -f "$file" ]; then
        replace_word_in_file "$file"
    fi
done
