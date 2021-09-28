export interface dynamicObject {
  [name: string]: any;
}

/**
 * How to use:
 * const array = new DynamicArray<string>();
 * array.add('foo');
 * array.add(12); // will fail
 */
class DynamicArray<T> {
  add(value: T): Array<T> {
    const collection = new Array<T>();
    collection.push(value);
    return collection;
  }
}
