# Python Notes

# A variable name must start with a letter or the underscore character
# A variable name cannot start with a number. 

# You can get the data type of any object by using the type() function.

# insert method
thislist = ["apple", "banana", "cherry"]
thislist.insert(1, "orange")

# remove method
thislist.remove("banana")

# the pop method removes the specified index
thislist.remove("banana")

# delete can be used to delete an index or the entire list
del thislist[0]
del thislist

# clear the list but it still remains, just empty
thislist.clear()

# looping throught a list
for x in thislist:
  print(x)

# Loop throught the index numbers
# You can also loop through the list items by referring to their index number.
# Use the range() and len() functions to create a suitable iterable.
thislist = ["apple", "banana", "cherry"]
for i in range(len(thislist)):
  print(thislist[i])


# Using a While Loop
thislist = ["apple", "banana", "cherry"]
i = 0
while i < len(thislist):
  print(thislist[i])
  i = i + 1

# .sort() will sort alphabetically or numberically
thislist.sort()

# To sort descending, use the keyword argument reverse = True:
thislist.sort(reverse = True)