package java_sandbox013;
public class Main {
    public static void main(String[] args) {
        Toy toy = new Toy("blue");
        Toy anotherToy = toy;
        System.out.println(toy.getColor());
        System.out.println(anotherToy.getColor());
    }
}
