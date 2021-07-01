package java_sandbox011;

public class Animal {
    private int eyes;
    private int body;
    private int legs;
    private int ears;

    public Animal(int eyes, int body, int legs, int ears) {
        this.eyes = eyes;
        this.body = body;
        this.legs = legs;
        this.ears = ears;
    }

    public int getEyes() {
        return eyes;
    }

    public int getBody() {
        return body;
    }

    public int getLegs() {
        return legs;
    }

    public int getEars() {
        return ears;
    }
    public void eat() {
        System.out.println("animal has eaten");
    }
}
