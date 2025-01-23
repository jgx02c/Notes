Binary search is an efficient algorithm for finding a target value in a sorted array. It works by repeatedly dividing the search interval in half. If the target value is less than the middle element, the search continues in the lower half; otherwise, it continues in the upper half.

### Steps for Binary Search:
1. **Start with the entire array**:
   - Define `low` as the index of the first element (0).
   - Define `high` as the index of the last element (length of the array - 1).
   
2. **Calculate the middle index**:
   - `mid = (low + high) // 2`

3. **Compare the middle element with the target**:
   - If the middle element matches the target, return its index.
   - If the target is less than the middle element, update `high = mid - 1`.
   - If the target is greater than the middle element, update `low = mid + 1`.

4. **Repeat the process**:
   - Continue until `low > high` or the target is found.

5. **Return -1**:
   - If the loop ends and the target is not found, return -1.

---

### Python Code for Binary Search
```python
def binary_search(arr, target):
    """
    Perform binary search on a sorted array to find the index of the target.

    :param arr: A sorted list of elements
    :param target: The element to search for
    :return: The index of the target element, or -1 if not found
    """
    low, high = 0, len(arr) - 1

    while low <= high:
        mid = (low + high) // 2  # Calculate the middle index
        if arr[mid] == target:   # Target found
            return mid
        elif arr[mid] < target:  # Target is in the upper half
            low = mid + 1
        else:                    # Target is in the lower half
            high = mid - 1

    return -1  # Target not found
```

---

### Example Usage:
```python
# Example array (must be sorted)
arr = [1, 3, 5, 7, 9, 11, 13, 15]
target = 7

# Perform binary search
result = binary_search(arr, target)

# Output the result
if result != -1:
    print(f"Element found at index {result}.")
else:
    print("Element not found in the array.")
```

---

### Complexity:
- **Time Complexity**: \( O(\log n) \) - Each step reduces the search interval by half.
- **Space Complexity**: \( O(1) \) - Iterative approach uses constant space.