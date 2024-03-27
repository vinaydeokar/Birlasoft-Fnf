public class Streamm{
    public static void main(String[] args){
    //ways of creating list:
    //1st way:
    List<Integer> list1= List.of(1,3,2,4,5); // withis method immutable object gets created i.e., we can't add elements to this list
    
    //2nd way:
    List<Integer> list2= new ArrayList<>(); //mutable list
    list2.add(12);
    list2.add(13);

    //3rd  way:
    List<Integer> list3= Arrays.asList(20,30,40);  //immutable list

    //find all even no.s in a list without stream
    List<Integer> listEven= new ArrayList<>();
    for(Integer i : list1){
        if(i%2==0){
            listEven.add(i);        
        }
    }
    System.out.println(listEven);

    //find all even no.s in a list with stream
    Stream<Integer> stream= list1.stream();   // collections have stream() method
    List<Integer> newList=stream.filter(i->i%2==0).collect(Collectors.toList);  //i->i%2==0 is a boolean valued function-predicate
             //List<Integer> newList=list1.stream.filter(i->i%2==0).collect(Collectors.toList); //in a single line
    System.out.println(newList);

    //ways to create stream object
    //1- blank stream

    Stream<Object> emptyStream = Stream.empty();

    //2- creating array, object, collection & passing them in a function "of" of Stream class
    String names[] = {"Durgesh", "Uttam", "Ankit", "Divya"}; 
    Stream<String> stream1 = Stream.of(names); 
    stream1.forEach(e -> {                //e -> { System.out.println(e); }: This is a lambda expression that serves as a consumer function.        
        System.out.println(e);
    });

    //5- using builder method of Streambuilder
    Stream<Object> streamBuilder= Stream.builder().build();

    //4- calling stream function using object of collection
    List<Integer> list2 = new ArrayList<>();
    list2.add(12);
    list2.add(34);
    list2.add(23);
    list2.add(78);
    Stream<Integer> stream2 = list2.stream();
    stream2.forEach(e -> {
        System.out.println(e);
    }
    
    //Methods
    // filter(predicate)
        // Predicate is a boolean valued function that returns true or false
    //map(function) - map takes function and performs operation and return some value
    //Use filter to implement if else
    List<Integer> names=List.of("Vinay","Vaishali","Rakesh");
    List<Integer> NewNames=list1.stream.filter(e->e.startsWith("V")).collect(Collectors.toList); //in a single line //many filter functions- length, isUpper, isGreater...
    System.out.println(NewNames);

    //Use map to implement operations
    List<Integer> numbers=List.of(1,2,3,4,5);
    List<Integer> newNumbers=stream.map(i->i*i).collect(Collectors.toList);
    System.out.println(NewNumbers);

    //Use forEach to traverse
    names.stream().forEach(
        e->{
            System.out.println(e);
        }
    );
    //or
    NewNames.stream().forEach(System.out::println); //System.out::println: This is a method reference. It's a shorthand way of defining a lambda expression that takes an argument and calls the println method of the System.out object with that argument. In this case, it's used to print each element in the stream to the console.
    
    //sorted
    numbers.stream.sorted().forEach(System.out::println);

    //min
    Integer integer= number.stream().min((x,y)->x.compareTo(y)).get();//The lambda expression (x, y) -> x.compareTo(y) is used as a comparator to determine the minimum element in the stream. 
                                    //.get(): The min operation returns an Optional<T> object containing the minimum element 
    System.out.println(integer);

    //max
    Integer integer1= number.stream().max((x,y)->x.compareTo(y)).get();
    System.out.println(integer1);
     
    }
}