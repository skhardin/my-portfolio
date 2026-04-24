import Typewriter from "@/components/Typewriter";

export default function About() {
  return (
    <div id="about" className="bg-gray-300 min-h-screen">
      <div className="bg-white shadow-lg px-15 py-15">
        <h1 className="text-4xl font-bold">About Me</h1>
      </div>
      
      <div className="grid grid-cols-3">
        <div className="">
          <img></img>
        </div>
        <div className="flex flex-col col-span-2 h-fit gap-3 justify-center px-15 py-15 m-10 bg-white shadow-lg rounded-xl">
          <p><span className="text-2xl">Hi, I'm Sophie</span> — a software engineer based in Austin, TX who loves building things that are fast, reliable, and secure. I spend my days making sure complex software systems work the way they should, which turns out to require equal parts detective work, creative thinking, and attention to detail. It's the kind of job that never really feels like one.</p>
          <p>My path into tech started with a genuine love of puzzles — the kind where the complexity makes the solution all the more satisfying — and creating — the kind you put yourself into driven by a mission. That curiosity led me to study Computer Science and Mathematics at Emory University, and eventually into a career working on large-scale systems used by millions of people every day.</p>
          <p>When I'm not at my computer, I'm usually busy with one of my laundry list of hobbies. I paint, draw, and upcycle my trash into crafts — and I think that creative side makes me a better engineer. Good art and good code have more in common than people expect — particularly <em>good design and resourcefulness</em>. Otherwise, I'll be playing roller derby with my local league, reading, jigsaw puzzling, playing chess, or experimenting in the kitchen.</p>
          <p>I'm always looking for interesting problems to solve and interesting people to solve them with. If that sounds like you, let's connect.</p>
        </div>
      </div>
    </div>
  );
}
