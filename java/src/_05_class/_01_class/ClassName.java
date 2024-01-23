package _05_class._01_class;

public class ClassName {
    // Field (Variable)
    public int number;
    public String name;

    // Method (Function)

    // Creator -> Same a class name
    public ClassName(){

    }

    public void testMethod (){
        System.out.println("test method");
    }

    public static void main(String[] args) {
        // Create object (Instance)
        ClassName test = new ClassName();
        System.out.println(test.name);
        System.out.println(test.number);

        // Using the field, method
        test.testMethod();
    }
}
