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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="home.html">Home</a></li><li class="chapter-item expanded affix "><li class="part-title">Mathematics</li><li class="chapter-item expanded "><a href="math/index.html"><strong aria-hidden="true">1.</strong> Overview</a></li><li class="chapter-item expanded "><a href="math/group-theory.html"><strong aria-hidden="true">2.</strong> Group Theory: Definitions and Axioms</a></li><li class="chapter-item expanded "><a href="math/clifford-algebra.html"><strong aria-hidden="true">3.</strong> Clifford Algebras</a></li><li class="chapter-item expanded "><a href="math/topology-manifolds.html"><strong aria-hidden="true">4.</strong> Topology, Manifolds, and Smooth Structure</a></li><li class="chapter-item expanded affix "><li class="part-title">Physics</li><li class="chapter-item expanded "><a href="physics/index.html"><strong aria-hidden="true">5.</strong> Overview</a></li><li class="chapter-item expanded "><a href="physics/QM/index.html"><strong aria-hidden="true">6.</strong> Quantum Mechanics</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="physics/QM/preliminaries.html"><strong aria-hidden="true">6.1.</strong> Mathematical Preliminaries</a></li><li class="chapter-item "><a href="physics/QM/postulates.html"><strong aria-hidden="true">6.2.</strong> Postulates of Quantum Mechanics</a></li><li class="chapter-item "><a href="physics/QM/heisenberg-picture.html"><strong aria-hidden="true">6.3.</strong> Heisenberg Picture</a></li><li class="chapter-item "><a href="physics/QM/path-integral.html"><strong aria-hidden="true">6.4.</strong> Path Integral Formulation</a></li></ol></li><li class="chapter-item expanded "><a href="physics/QFT/index.html"><strong aria-hidden="true">7.</strong> Quantum Field Theory</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="physics/QFT/preliminaries.html"><strong aria-hidden="true">7.1.</strong> Definitions and Preliminaries</a></li><li class="chapter-item "><a href="physics/QFT/postulates.html"><strong aria-hidden="true">7.2.</strong> Postulates of Quantum Field Theory</a></li><li class="chapter-item "><a href="physics/QFT/foundations-modern.html"><strong aria-hidden="true">7.3.</strong> Modern Foundations — Wigner–Weinberg Derivation</a></li><li class="chapter-item "><a href="physics/QFT/fock-space-inventory.html"><strong aria-hidden="true">7.4.</strong> Fock Space Inventory</a></li><li class="chapter-item "><a href="physics/QFT/particles-as-excitations.html"><strong aria-hidden="true">7.5.</strong> Particles as Excitations of Quantum Fields</a></li><li class="chapter-item "><a href="physics/QFT/observables/index.html"><strong aria-hidden="true">7.6.</strong> Observables of QFT</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="physics/QFT/observables/cross-sections.html"><strong aria-hidden="true">7.6.1.</strong> Cross Sections</a></li><li class="chapter-item "><a href="physics/QFT/observables/decay-rates.html"><strong aria-hidden="true">7.6.2.</strong> Decay Rates</a></li><li class="chapter-item "><a href="physics/QFT/observables/direct-vs-inferred.html"><strong aria-hidden="true">7.6.3.</strong> Direct vs. Inferred Observables</a></li><li class="chapter-item "><a href="physics/QFT/observables/collider-measurements.html"><strong aria-hidden="true">7.6.4.</strong> Collider Measurements: Theory → Variable → Result</a></li><li class="chapter-item "><a href="physics/QFT/observables/electroweak.html"><strong aria-hidden="true">7.6.5.</strong> Electroweak Observables</a></li><li class="chapter-item "><a href="physics/QFT/observables/standard-model.html"><strong aria-hidden="true">7.6.6.</strong> Standard Model Observables</a></li></ol></li><li class="chapter-item "><a href="physics/QFT/remarks.html"><strong aria-hidden="true">7.7.</strong> Remarks and Open Issues</a></li><li class="chapter-item "><a href="physics/QFT/theories/index.html"><strong aria-hidden="true">7.8.</strong> Specific Theories</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="physics/QFT/theories/QED/from-postulates.html"><strong aria-hidden="true">7.8.1.</strong> Quantum Electrodynamics (QED)</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="physics/QFT/theories/QED/historical.html"><strong aria-hidden="true">7.8.1.1.</strong> Historical (Dirac-Equation) Route</a></li><li class="chapter-item "><a href="physics/QFT/theories/QED/compton.html"><strong aria-hidden="true">7.8.1.2.</strong> Compton Scattering</a></li><li class="chapter-item "><a href="physics/QFT/theories/QED/hydrogen.html"><strong aria-hidden="true">7.8.1.3.</strong> The Hydrogen Atom in QED</a></li></ol></li><li class="chapter-item "><a href="physics/QFT/theories/QCD/from-postulates.html"><strong aria-hidden="true">7.8.2.</strong> Quantum Chromodynamics (QCD)</a></li><li class="chapter-item "><a href="physics/QFT/theories/electroweak/from-postulates.html"><strong aria-hidden="true">7.8.3.</strong> Electroweak Theory</a></li><li class="chapter-item "><a href="physics/QFT/theories/standard-model/from-postulates.html"><strong aria-hidden="true">7.8.4.</strong> The Standard Model</a></li></ol></li></ol></li></ol>';
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
