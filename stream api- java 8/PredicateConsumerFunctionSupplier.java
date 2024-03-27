public class PredicateConsumerFunctionSupplier{
    //predicate-  a Predicate is a function that takes an input value of a certain type and returns true or false based on a condition.
    Predicate<Integer> isEven = n -> n % 2 == 0;
        System.out.println(isEven.test(4));  // true
        System.out.println(isEven.test(7));  // false

    //consumer- Consumer is a functional interface that represents an operation that accepts a single input argument and performs some action on it without returning any result like an anonymous function
    List<String> names = new ArrayList<>();
        names.add("Alice");
        names.add("Bob");
        names.add("Charlie");
        names.add("David");

        // Define a Consumer to print each name
        Consumer<String> printName = (name) -> {
            System.out.println("Name: " + name);
        };

        // Use the Consumer to process each name in the list
        names.forEach(printName);

    //Function
    Function<Integer,String> getInt=t->t*10 + "data multiplied by 10"; //Function is a functional interface that represents a function that takes one input argument and produces a result
    System.out.println(getInt.apply(2));

    //Supplier- a Supplier is a functional interface that represents a supplier of results, meaning it produces a result of a given type without taking any input arguments. 
        Supplier<Integer> randomSupplier = () -> (int) (Math.random() * 100);
        // Use the get method to get a random integer
        int randomNumber = randomSupplier.get();
        System.out.println("Random Number: " + randomNumber);

}