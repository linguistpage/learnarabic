#!/bin/bash


# executable
chmod +x "$0"

# Prompt for input
echo "Please enter the title:"
read title

echo "Please paste the link:"
read link

echo "Please enter Instructor:"
read instructor

echo "Please enter categories:"
read categories

echo "Please enter tags (comma separated):"
read tags

echo "Please enter subjects:"
read subjects

echo "Please enter dialects:"
read dialects

echo "Please enter languages:"
read languages

# Create markdown file
filename="${title}.md"

# Write front matter to markdown file
cat <<EOL > "$filename"
---
title: "$title"
link: "$link"
instructors: "$instructor"
categories: "$categories"
tags: [$tags]
subjects: "$subjects"
dialects: "$dialects"
languages: "$languages"
---
EOL

echo "Markdown file '$filename' created successfully."

