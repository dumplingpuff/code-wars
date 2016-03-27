#  // solving this in ruby
# // want to take out senseless directions out of array
# // ['WEST', 'EAST', 'SOUTH', 'NORTH', 'EAST', 'EAST']
# //  becomes: [EAST, EAST]
# // ['EAST', 'NORTH', 'WEST', 'EAST', 'SOUTH', 'WEST']
# // becomes: []

# // iterate through  array, see if element in front is the opposite direction
# // if so remove both elements from array.
# // re-iterate through array, call upon itself.
# // return array once you are done.

# east can't be next to west and north can't be next to SOUTH
#


# .delete_at(indexOf())

def dirReduc(arr)
  direction = {'WEST' => 1, 'EAST' => 1, 'NORTH' => 2, 'SOUTH' => 2}
  arr.each_with_index {|item, index|
    unless item == arr[index + 1]
      if direction[item] == direction[arr[index + 1]]
        arr.delete_at(index + 1)
        arr.delete_at(index)
        dirReduc(arr)
      end
    end
  }
  return arr
end

a = ['WEST', 'WEST', 'SOUTH', 'NORTH', 'EAST', 'EAST']

dirReduc(a)
