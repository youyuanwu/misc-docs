// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="home.html">Home</a></li><li class="chapter-item expanded affix "><li class="part-title">Philosophy</li><li class="chapter-item expanded "><a href="philosophy/index.html"><strong aria-hidden="true">1.</strong> Overview</a></li><li class="chapter-item expanded "><a href="philosophy/remarks/index.html"><strong aria-hidden="true">2.</strong> Remarks</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="philosophy/remarks/semantics-and-meaning.html"><strong aria-hidden="true">2.1.</strong> Semantics and the Theory of Meaning</a></li></ol></li><li class="chapter-item expanded "><li class="part-title">Logic</li><li class="chapter-item expanded "><a href="logic/index.html"><strong aria-hidden="true">3.</strong> Overview</a></li><li class="chapter-item expanded "><a href="logic/sentential-logic.html"><strong aria-hidden="true">4.</strong> Sentential (Propositional) Logic</a></li><li class="chapter-item expanded "><a href="logic/first-order-logic.html"><strong aria-hidden="true">5.</strong> First-Order (Predicate) Logic</a></li><li class="chapter-item expanded "><a href="logic/higher-order-logic.html"><strong aria-hidden="true">6.</strong> Second-Order and Higher-Order Logic</a></li><li class="chapter-item expanded "><a href="logic/intuitionistic-logic.html"><strong aria-hidden="true">7.</strong> Intuitionistic Logic</a></li><li class="chapter-item expanded "><a href="logic/paraconsistent-logic.html"><strong aria-hidden="true">8.</strong> Paraconsistent Logic</a></li><li class="chapter-item expanded "><a href="logic/set-theory-zfc.html"><strong aria-hidden="true">9.</strong> Axiomatic Set Theory (ZFC)</a></li><li class="chapter-item expanded "><a href="logic/model-theory.html"><strong aria-hidden="true">10.</strong> Model Theory</a></li><li class="chapter-item expanded "><a href="logic/category-theory.html"><strong aria-hidden="true">11.</strong> Category Theory (Foundations of Mathematics)</a></li><li class="chapter-item expanded "><a href="logic/topics/index.html"><strong aria-hidden="true">12.</strong> Topics</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="logic/topics/godel-incompleteness.html"><strong aria-hidden="true">12.1.</strong> Gödel&#39;s Incompleteness Theorems</a></li></ol></li><li class="chapter-item expanded "><a href="logic/remarks/index.html"><strong aria-hidden="true">13.</strong> Remarks</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="logic/remarks/set-theory-and-first-order-logic.html"><strong aria-hidden="true">13.1.</strong> Set Theory and First-Order Logic</a></li><li class="chapter-item "><a href="logic/remarks/models-truth-and-metalanguage.html"><strong aria-hidden="true">13.2.</strong> Models, Truth, and Metalanguage</a></li><li class="chapter-item "><a href="logic/remarks/metalanguage-hierarchy.html"><strong aria-hidden="true">13.3.</strong> The Metalanguage Hierarchy and Semantics in Mathematics</a></li><li class="chapter-item "><a href="logic/remarks/justifying-con-zfc.html"><strong aria-hidden="true">13.4.</strong> What Justifies Con(ZFC)?</a></li><li class="chapter-item "><a href="logic/remarks/metatheory-of-first-order-logic.html"><strong aria-hidden="true">13.5.</strong> What the Metalanguage for First-Order Logic Assumes</a></li><li class="chapter-item "><a href="logic/remarks/choice-and-excluded-middle.html"><strong aria-hidden="true">13.6.</strong> The Axiom of Choice and Excluded Middle (Diaconescu&#39;s Theorem)</a></li></ol></li><li class="chapter-item expanded "><li class="part-title">Mathematics</li><li class="chapter-item expanded "><a href="math/index.html"><strong aria-hidden="true">14.</strong> Overview</a></li><li class="chapter-item expanded "><a href="math/group-theory.html"><strong aria-hidden="true">15.</strong> Group Theory: Definitions and Axioms</a></li><li class="chapter-item expanded "><a href="math/clifford-algebra.html"><strong aria-hidden="true">16.</strong> Clifford Algebras</a></li><li class="chapter-item expanded "><a href="math/topology-manifolds.html"><strong aria-hidden="true">17.</strong> Topology, Manifolds, and Smooth Structure</a></li><li class="chapter-item expanded "><a href="math/complexity-theory.html"><strong aria-hidden="true">18.</strong> Computational Complexity Theory</a></li><li class="chapter-item expanded affix "><li class="part-title">Physics</li><li class="chapter-item expanded "><a href="physics/index.html"><strong aria-hidden="true">19.</strong> Overview</a></li><li class="chapter-item expanded "><a href="physics/SR/index.html"><strong aria-hidden="true">20.</strong> Special Relativity</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="physics/SR/basics.html"><strong aria-hidden="true">20.1.</strong> Basics of Special Relativity</a></li></ol></li><li class="chapter-item expanded "><a href="physics/QM/index.html"><strong aria-hidden="true">21.</strong> Quantum Mechanics</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="physics/QM/preliminaries.html"><strong aria-hidden="true">21.1.</strong> Mathematical Preliminaries</a></li><li class="chapter-item "><a href="physics/QM/postulates.html"><strong aria-hidden="true">21.2.</strong> Postulates of Quantum Mechanics</a></li><li class="chapter-item "><a href="physics/QM/heisenberg-picture.html"><strong aria-hidden="true">21.3.</strong> Heisenberg Picture</a></li><li class="chapter-item "><a href="physics/QM/path-integral.html"><strong aria-hidden="true">21.4.</strong> Path Integral Formulation</a></li></ol></li><li class="chapter-item expanded "><a href="physics/QFT/index.html"><strong aria-hidden="true">22.</strong> Quantum Field Theory</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="physics/QFT/preliminaries.html"><strong aria-hidden="true">22.1.</strong> Definitions and Preliminaries</a></li><li class="chapter-item "><a href="physics/QFT/postulates.html"><strong aria-hidden="true">22.2.</strong> Postulates of Quantum Field Theory</a></li><li class="chapter-item "><a href="physics/QFT/foundations-modern.html"><strong aria-hidden="true">22.3.</strong> Modern Foundations — Wigner–Weinberg Derivation</a></li><li class="chapter-item "><a href="physics/QFT/fock-space-inventory.html"><strong aria-hidden="true">22.4.</strong> Fock Space Inventory</a></li><li class="chapter-item "><a href="physics/QFT/particles-as-excitations.html"><strong aria-hidden="true">22.5.</strong> Particles as Excitations of Quantum Fields</a></li><li class="chapter-item "><a href="physics/QFT/observables/index.html"><strong aria-hidden="true">22.6.</strong> Observables of QFT</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="physics/QFT/observables/cross-sections.html"><strong aria-hidden="true">22.6.1.</strong> Cross Sections</a></li><li class="chapter-item "><a href="physics/QFT/observables/decay-rates.html"><strong aria-hidden="true">22.6.2.</strong> Decay Rates</a></li><li class="chapter-item "><a href="physics/QFT/observables/direct-vs-inferred.html"><strong aria-hidden="true">22.6.3.</strong> Direct vs. Inferred Observables</a></li><li class="chapter-item "><a href="physics/QFT/observables/collider-measurements.html"><strong aria-hidden="true">22.6.4.</strong> Collider Measurements: Theory → Variable → Result</a></li><li class="chapter-item "><a href="physics/QFT/observables/electroweak.html"><strong aria-hidden="true">22.6.5.</strong> Electroweak Observables</a></li><li class="chapter-item "><a href="physics/QFT/observables/standard-model.html"><strong aria-hidden="true">22.6.6.</strong> Standard Model Observables</a></li></ol></li><li class="chapter-item "><a href="physics/QFT/remarks.html"><strong aria-hidden="true">22.7.</strong> Remarks and Open Issues</a></li><li class="chapter-item "><a href="physics/QFT/theories/index.html"><strong aria-hidden="true">22.8.</strong> Specific Theories</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="physics/QFT/theories/QED/from-postulates.html"><strong aria-hidden="true">22.8.1.</strong> Quantum Electrodynamics (QED)</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="physics/QFT/theories/QED/historical.html"><strong aria-hidden="true">22.8.1.1.</strong> Historical (Dirac-Equation) Route</a></li><li class="chapter-item "><a href="physics/QFT/theories/QED/dirac-applications.html"><strong aria-hidden="true">22.8.1.2.</strong> Applications and Verifications of the Dirac Equation</a></li><li class="chapter-item "><a href="physics/QFT/theories/QED/compton.html"><strong aria-hidden="true">22.8.1.3.</strong> Compton Scattering</a></li><li class="chapter-item "><a href="physics/QFT/theories/QED/hydrogen.html"><strong aria-hidden="true">22.8.1.4.</strong> The Hydrogen Atom in QED</a></li></ol></li><li class="chapter-item "><a href="physics/QFT/theories/QCD/from-postulates.html"><strong aria-hidden="true">22.8.2.</strong> Quantum Chromodynamics (QCD)</a></li><li class="chapter-item "><a href="physics/QFT/theories/electroweak/from-postulates.html"><strong aria-hidden="true">22.8.3.</strong> Electroweak Theory</a></li><li class="chapter-item "><a href="physics/QFT/theories/standard-model/from-postulates.html"><strong aria-hidden="true">22.8.4.</strong> The Standard Model</a></li></ol></li></ol></li><li class="chapter-item expanded "><li class="part-title">Miscellaneous</li><li class="chapter-item expanded "><a href="misc/index.html"><strong aria-hidden="true">23.</strong> Overview</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="misc/deutsch-jozsa.html"><strong aria-hidden="true">23.1.</strong> The Deutsch–Jozsa Algorithm</a></li><li class="chapter-item "><a href="misc/quantum-complexity-theory.html"><strong aria-hidden="true">23.2.</strong> Quantum Complexity Theory</a></li><li class="chapter-item "><a href="misc/quantum-algorithms.html"><strong aria-hidden="true">23.3.</strong> Quantum Algorithms: Anatomy and Pipeline</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
