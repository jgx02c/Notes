### **Linked Lists: A Complete Overview**

A **linked list** is a linear data structure in which elements, called **nodes**, are linked together using pointers. Each node typically contains two components:

1. **Data**: The value stored in the node.
2. **Pointer**: A reference to the next node in the sequence.

Unlike arrays, linked lists do not store elements in contiguous memory locations. This provides flexibility but comes with trade-offs in terms of traversal and memory usage.

---

### **Types of Linked Lists**

1. **Singly Linked List**:
   - Each node points to the next node.
   - The last node points to `None` (or `null` in some languages).
   - Operations: Traversal is unidirectional.

   **Example**:
   ```
   Head -> [Data | Next] -> [Data | Next] -> None
   ```

2. **Doubly Linked List**:
   - Each node contains two pointers: one to the next node and another to the previous node.
   - Traversal is bidirectional.

   **Example**:
   ```
   None <- [Prev | Data | Next] <-> [Prev | Data | Next] -> None
   ```

3. **Circular Linked List**:
   - The last node points back to the first node, forming a circle.
   - Can be singly or doubly linked.
   - No `None` pointers are present in the last node.

   **Example (Singly Circular)**:
   ```
   Head -> [Data | Next] -> [Data | Next] -> [Data | Next] -> Head
   ```

4. **Circular Doubly Linked List**:
   - Combines features of circular and doubly linked lists.

---

### **Why Use Linked Lists?**

#### **Advantages**:
1. **Dynamic Size**: Linked lists can grow or shrink dynamically without requiring resizing or reallocation.
2. **Efficient Insertions/Deletions**:
   - Adding or removing elements is efficient when you have a reference to the node.
   - No need to shift elements (as in arrays).

#### **Disadvantages**:
1. **Sequential Access**: Traversing the list to access a specific node takes \(O(n)\) time.
2. **Memory Overhead**:
   - Each node requires extra memory for pointers.
   - More memory usage compared to arrays for the same data.

---

### **Basic Operations**

#### **1. Traversal**:
Visit each node in the list.

**Algorithm**:
```python
current = head
while current:
    print(current.data)
    current = current.next
```

---

#### **2. Insertion**:
Add a new node to the list.

- **At the Beginning**:
  ```python
  new_node.next = head
  head = new_node
  ```

- **At the End**:
  ```python
  current = head
  while current.next:
      current = current.next
  current.next = new_node
  ```

- **At a Specific Position**:
  ```python
  new_node.next = prev_node.next
  prev_node.next = new_node
  ```

---

#### **3. Deletion**:
Remove a node from the list.

- **At the Beginning**:
  ```python
  head = head.next
  ```

- **At the End**:
  ```python
  current = head
  while current.next.next:
      current = current.next
  current.next = None
  ```

- **At a Specific Position**:
  ```python
  prev_node.next = target_node.next
  ```

---

#### **4. Search**:
Find if a value exists in the list.

**Algorithm**:
```python
current = head
while current:
    if current.data == target:
        return True
    current = current.next
return False
```

---

### **Example Implementation**

#### **Node Class**:
```python
class ListNode:
    def __init__(self, data=0, next=None):
        self.data = data
        self.next = next
```

#### **LinkedList Class**:
```python
class LinkedList:
    def __init__(self):
        self.head = None

    def insert_at_beginning(self, data):
        new_node = ListNode(data)
        new_node.next = self.head
        self.head = new_node

    def insert_at_end(self, data):
        new_node = ListNode(data)
        if not self.head:
            self.head = new_node
            return
        current = self.head
        while current.next:
            current = current.next
        current.next = new_node

    def display(self):
        current = self.head
        while current:
            print(current.data, end=" -> ")
            current = current.next
        print("None")
```

#### **Usage**:
```python
# Create a linked list
ll = LinkedList()

# Insert elements
ll.insert_at_beginning(10)
ll.insert_at_end(20)
ll.insert_at_end(30)

# Display the list
ll.display()
```

---

### **Comparison: Linked Lists vs Arrays**

| Feature                   | Linked List                      | Array                         |
|---------------------------|-----------------------------------|-------------------------------|
| **Memory Usage**          | Higher (due to pointers)         | Lower                         |
| **Dynamic Resizing**      | Easy                             | Requires reallocation         |
| **Access Time**           | \(O(n)\)                        | \(O(1)\) for direct indexing  |
| **Insertion/Deletion**    | \(O(1)\) (at head)               | \(O(n)\) (shifting elements)  |

---

### **Applications of Linked Lists**

1. **Dynamic Memory Allocation**: Common in data structures like stacks, queues, and graphs.
2. **Chaining in Hash Tables**: For collision resolution.
3. **File Allocation**: Linked allocation of blocks.
4. **Undo Functionality**: In applications like text editors.
