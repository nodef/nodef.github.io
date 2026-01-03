Packages made for ⚙️ C/C++, 📦 *Node.js*, 🌐 *Web*, 🐚 *Bash*, and 🖥️ *Command prompt*.

<br>


## Single-file C/C++ libraries (cpoach project)

The **cpoach** project was motivated by the need for easy-to-use, C/C++ libraries that can be effortlessly installed (via `npm`), and integrated into C/C++ projects - without the hassle of build systems (rather, just like `#include <stdio.h>`), and without including the third-party libraries into the project's version control. This is mainly to facilitate in-class demonstrations and assignments. The name **cpoach** is a playful nod to the idea of *poaching* awesome C/C++ libraries and making them easily accessible for educational purposes. Many of these libraries are listed in [r-lyeh/single_file_libs](https://github.com/r-lyeh/single_file_libs), or [fffaraz/awesome-cpp](https://github.com/fffaraz/awesome-cpp). I was listening to Eskil Steenberg's talk on [Advanced C](https://www.youtube.com/watch?v=w3_e9vZj7D8), which you should also look into. He also has a [collection of C libraries](https://gamepipeline.org/index.html) that you may want to explore.

Issues or suggestions regarding a specific library should be directed to the original library repository. However, for issues or suggestions related to the **cpoach** project, please [open an issue here](https://github.com/nodef/nodef.github.io/issues).

Below is a categorized list of single-file C/C++ libraries available through the **cpoach** project:

<details markdown="1">
<summary>🍳 Army knives</summary>
<br>

| Package | Description |
|  ----  |  ----  |
| ⚙️ [stb.c] | stb single-file public domain libraries for C/C++; Sean Barrett (2014). |
| ⚙️ [plibsys.c] | Highly portable C system library: threads and synchronization primitives, sockets (TCP, UDP, SCTP), IPv4 and IPv6, IPC, hash functions (MD5, SHA-1, SHA-2, SHA-3, GOST), binary trees (RB, AVL) and more. Native code performance; Alexander Saprykin (2010). |
| ⌛ [libgb.c] | gb single-file public domain libraries for C & C++; gingerBill (2015). |
| ⌛ [prideout.c] | single-file C libraries from Philip Allan Rideout; Philip Rideout (2015). |

<br>
</details>

<details markdown="1">
<summary>🍳 High Performance Computing (HPC)</summary>
<br>

| Package | Description |
|  ----  |  ----  |
| ⚙️ [subprocess.c] | 🐜 Single header process launching solution for C and C++; Neil Henning (2017). |
| ⚙️ [tinycthread.c] | Small, portable implementation of the C11 threads API; Evan Nemerson (2012). |
| ⚙️ [pthreads4w.c] | POSIX threads API for Windows from https://sourceforge.net/p/pthreads4w; Ben Elliston (1998). |
| ⚙️ [minicoro.c] | Single header stackful cross-platform coroutine library in pure C; Eduardo Bart (2021). |
| ⚙️ [cds_sync.c] | Single-header C90 collection of synchronization primitives; Cort Stratton (2015). |
| ⚙️ [buddy_alloc.c] | A single header buddy memory allocator for C & C++; Stanislav Paskalev (2021). |
| ⚙️ [rfft.c] | Reasonably fast Fourier transform in a single header for C and C++; grego (2023). |
| ⚙️ [xxhash.c] | Extremely fast non-cryptographic hash algorithm; Yann Collet (2012). |
| ⚙️ [linmath.c] | A lean linear math library, aimed at graphics programming. Supports vec3, vec4, mat4x4 and quaternions; Wolfgang Draxinger (2013). |
| ⚙️ [algebra3.cxx] | Vector utilities for 2, 3, and 4 element vectors, all inline; Jean-Francois Doue, Paul S. Heckbert, and J. Nagle (1993). |
| ⚙️ [stb_stats.c] | Single header file with a bunch of useful statistical functions such as ANOVA, Kruskal-Wallis, T-test, etc; Gerben Voshol (2018). |
| ⌛ [opencl.c] | C/C++ language headers for the OpenCL API; The Khronos Group (2013). |
| ⌛ **clew.c** | The OpenCL Extension Wrangler Library; Martijn Berger ([XXXX](https://github.com/martijnberger/clew)). |
| ⌛ [bikeshed.c] | Lock free hierarchical work scheduler; Dan Engelbrecht (2019). |
| ⌛ **jemalloc.c** | jemalloc is a general purpose malloc(3) implementation that emphasizes fragmentation avoidance and scalable concurrency support; Jason Evans ([XXXX](https://github.com/jemalloc/jemalloc)). |
| ⌛ [genann.c] | simple neural network library in ANSI C; Lewis Van Winkle (2016). |
| ⌛ [kann.c] | A lightweight C library for artificial neural networks; Attractive Chaos (2016). |
| ⌛ **robin-map.cxx** | C++ implementation of a fast hash map and hash set using robin hood hashing; Thibaut Goetghebuer-Planchon ([XXXX](https://github.com/Tessil/robin-map)). |
| ⌛ [uthash.c] | C macros for hash tables and more; Troy D. Hanson (2005). |
| ⌛ **cephes.c** | Mirror of the Cephes C source for reference; Stephen L. Moshier ([XXXX](https://github.com/jeremybarnes/cephes)). |
| ⌛ [hypatia.c] | A header-only, pure-C math library for 2D/3D graphics (matrix, vector, quaternion) Seeks to be close to C89/C90 compliant for portability. It's like a BLAS, but easier to use; Darryl T. Agostinelli (2015). |
| ⌛ [handmademath.c] | A simple math library for games and computer graphics. Compatible with both C and C++. Public domain and easy to modify; Ben Visness (2016). |
| ⌛ [ccvector.c] | A vector and matrix math library; Job Talle (2015). |
| ⌛ [doops.c] | Single C file event loop; Eduard Suica (2019). |
| ⌛ [ranxoshi256.c] | Portable, single-file, PRNG library implementing the xoshiro256** algorithm; BareRose (2018). |
| ⌛ [uuid4.c] | UUID v4 generation in C; Grégory Pakosz (2019). |
| ⌛ [uuid_h.c] | Single file, STB-style, "lib" to generate uuid:s; Fredrik Kihlander (2016). |
| ⌛ **range-v3.cxx** | Range library for C++14/17/20, basis for C++20's std::ranges; Eric Niebler ([XXXX](https://github.com/Tessil/robin-map)). |

<br>
</details>

<details markdown="1">
<summary> 🍳 Computer Graphics</summary>
<br>

| Package | Description |
|  ----  |  ----  |
| ⚙️ [clay.c] | High performance UI layout library in C; Nic Barker (2024). |
| ⚙️ [microui.c] | A tiny immediate-mode UI library; rxi (2018). |
| ⚙️ [tigr.c] | TIGR - the TIny GRaphics library for Windows, macOS, Linux, iOS and Android. |
| ⚙️ [rgfw.c] | A cross platform lightweight single-header simple-to-use window abstraction library for creating graphical programs or libraries; Riley Mabb (2023). |
| ⚙️ [glfw3.c] | A multi-platform library for OpenGL, OpenGL ES and Vulkan development on the desktop; Marcus Geelnard (2002). |
| ⚙️ [glad.c] | Vulkan/GL/GLES/EGL/GLX/WGL Loader based on the official specs, using glad by David Herberth (2013). |
| ⚙️ [vulkan.c] | Vulkan header files and API registry; The Khronos Group (2018). |
| ⚙️ [egl.c] | EGL API and Extension Registry; The Khronos Group (2016). |
| ⚙️ [voxelizer.c] | Header only mesh voxelizer in c99; Karim Naaji (2016). |
| ⚙️ [rang.cxx] | A Minimal, Header only Modern c++ library for terminal goodies; Abhinav Gauniyal (2016). |
| ⌛ [sdl3.c] | Simple DirectMedia Layer; Sam Lantinga (1997). |
| ⌛ **openvr.c** | OpenVR SDK; Valve Software ([XXXX](https://github.com/ValveSoftware/openvr)). |
| ⌛ [openmodal.c] | Dependency free, cross-platform, single header lib to open native file modals; bzt (2023). |
| ⌛ [tinyfiledialogs.c] | Modal dia  logs inc. file open/save (Win/Mac/Linux); Guillaume Vareille (2014). |
| ⌛ [lightmapper.c] | A C/C++ single-file library for drop-in lightmap baking. Just use your existing OpenGL renderer to bounce light; ands (2016). |
| ⌛ [sdl3.c] | Simple DirectMedia Layer; Sam Lantinga (1997). |
| ⌛ [glew.c] | The OpenGL Extension Wrangler Library; Milan Ikits and Marcelo Magallon (2002). |
| ⌛ [rfont.c] | Simple-to-use single header modular font rendering library written in C; Riley Mabb (2023). |

<br>
</details>

<details markdown="1">
<summary> 🍳 Video</summary>
<br>

| Package | Description |
|  ----  |  ----  |
| ⚙️ [pl_mpeg.c] | Single file C library for decoding MPEG1 Video and MP2 Audio; Dominic Szablewski (2019). |
| ⌛ [jo_mpeg.c] | Simple, Minimalistic, No Allocations MPEG writer - without audio; Jon Olick and Wladislav Artsimovich (2016). |

<br>
</details>

<details markdown="1">
<summary> 🍳 Audio</summary>
<br>

| Package | Description |
|  ----  |  ----  |
| ⚙️ [miniaudio.c] | Audio playback and capture library written in C, in a single source file; David Reid (2016). |
| ⌛ [dr_libs.c] | Audio decoding libraries for C/C++, each in a single source file; David Reid (2015). |
| ⌛ [tflac.c] | A single file, freestanding FLAC encoding library in C89; John Regan (2024). |
| ⌛ [minimp3.c] | Minimalistic MP3 decoder single header library; Lion (2018). |
| ⌛ [pocketmod.c] | Small ANSI C library for turning ProTracker MOD files into playable PCM audio; rombankzero (2018). |
| ⌛ [atomix.c] | Portable, single-file, wait-free atomic sound mixing library utilizing SSE-accelerated mixing; BareRose (2018). |

<br>
</details>

<details markdown="1">
<summary> 🍳 Networking</summary>
<br>

| Package | Description |
|  ----  |  ----  |
| ⌛ [mongoose.c] | Embedded web server, with TCP/IP network stack, MQTT and Websocket; Cesanta Software (2010). |
| ⌛ [webby.c] | A tiny webserver for game development; Andreas Fredriksson (2012). |
| ⌛ [concord.c] | A Discord API wrapper library made in C; Cogmasters (2020). |

<br>
</details>

<details markdown="1">
<summary> 🍳 Compression</summary>
<br>

| Package | Description |
|  ----  |  ----  |
| ⚙️ [lz4.c] | Extremely Fast Compression algorithm; lz4 (2011). |
| ⚙️ [dmc_unrar.c] | A dependency-free, single-file FLOSS unrar library; Sven Hesse (2017). |
| ⌛ [microtar.c] | A lightweight tar library written in ANSI C; rxi (2016). |
| ⌛ [miniz.c] | miniz: Single C source file zlib-replacement library, originally from code.google.com/p/miniz; Rich Geldreich (2011). |

<br>
</details>

<details markdown="1">
<summary> 🍳 Cryptography</summary>
<br>

| Package | Description |
|  ----  |  ----  |
| ⌛ [monocypher.c] | An easy to use, easy to deploy crypto library; Loup Vaillant (2016). |

<br>
</details>

<details markdown="1">
<summary> 🍳 Serialization</summary>
<br>

| Package | Description |
|  ----  |  ----  |
| ⚙️ [parson.c] | Lightweight JSON library written in C; Krzysztof Gabis (2012). |
| ⚙️ [mini.cxx] | INI file reader and writer; Danijel Durakovic (2018). |
| ⚙️ [lurlparser.cxx] | Lightweight URL & URI parser (RFC 1738, RFC 3986); Sergey Kosarevsky (2015). |
| ⚙️ [parg.c] | Parser for argv that works similarly to getopt; Jørgen Ibsen (2015). |
| ⌛ [inih.c] | Simple .INI file parser in C, good for embedded systems; Ben Hoyt (2009). |
| ⌛ [yxml.c] | Yxml is a small (6 KiB) non-validating yet mostly conforming XML parser written in C; Yorhel (2013). |
| ⌛ **tiny-json.c** | The tiny-json is a versatile and easy to use json parser in C suitable for embedded systems. It is fast, robust and portable; Rafa Garcia ([XXXX](https://github.com/rafagafe/tiny-json)). |
| ⌛ [model3d.c] | 3D model format specification and single header SDK. Supports skeletal animations, voxels and has the best data density; bzt (2019). |
| ⌛ [tinyobjloader.c] | Header only tiny wavefront .obj loader in pure C99; Syoyo Fujita (2016). |
| ⌛ [fast_obj.c] | Fast C OBJ parser; Richard Knight (2018). |
| ⌛ [cgltf.c] | 💠 Single-file glTF 2.0 loader and writer written in C99; Johannes Kuhlmann (2018). |
| ⌛ [qr-code-generator.c] | High-quality QR Code generator library in Java, TypeScript/JavaScript, Python, Rust, C++, C; Nayuki (2016). |
| ⌛ [cmp.c] | An implementation of the MessagePack serialization format in C / msgpack.org; Charlie Gunyon (2014). |
| ⌛ [libcmdf.c] | Single-header library for writing CLI applications in C/C++; Ronen Kreimer (2017). |
| ⌛ [kgflags.c] | kgflags is an easy to use command-line flag parsing library; Krzysztof Gabis (2020). |
| ⌛ [linenoise.c] | A small self-contained alternative to readline and libedit; Salvatore Sanfilippo (2010). |

<br>
</details>

<details markdown="1">
<summary> 🍳 Text Processing</summary>
<br>

| Package | Description |
|  ----  |  ----  |
| ⚙️ [remimu.c] | Single-file header-only regex engine, C99/C++11; Alexander Nadeau (2024). |
| ⚙️ [slre.c] | Super Light Regular Expressions; Aquefir (2013). |
| ⚙️ [unformat.cxx] | Fastest type-safe parsing library in the world for C++14 or C++17 (up to 300x faster than std::regex); Adam Yaxley (2017). |
| ⚙️ [ggformat.cxx] | A string formatting library for C++; Michael Savage (2017). |
| ⚙️ [utf8.c] | 📚 Single header utf8 string functions for C and C++; Neil Henning (2015). |
| ⚙️ [utf8proc.c] | A clean C library for processing UTF-8 Unicode data; Steven G. Johnson (2014). |
| ⚙️ [wcwidth9.c] | Platform independent, header only, wcwidth with full unicode 9 support; Joshua Rubin (2016). |
| ⌛ [str.c] | str: yet another string library for C language; Maxim (2020). |
| ⌛ [csplit.c] | A single header C library to simplify splitting and processing strings; Jakub Wlodek (2019). |
| ⌛ [stmr.c] | Porter Stemmer algorithm in C; Titus (2014). |
| ⌛ [levenshtein.c] | Levenshtein algorithm in C; Titus (2015). |
| ⌛ **fmt.cxx** | A modern formatting library; Victor Zverovich ([XXXX](https://github.com/fmtlib/fmt)) |

<br>
</details>

<details markdown="1">
<summary> 🍳 Emulation/Scripting</summary>
<br>

| Package | Description |
|  ----  |  ----  |
| ⚙️ [pocketpy.c] | Portable Python 3.x Interpreter in Modern C for Game Scripting; pocketpy (2022). |
| ⚙️ [minilua.c] | Single-file port of Lua, a powerful scripting language; Eduardo Bart (2020). |
| ⚙️ [my_basic.c] | A lightweight BASIC interpreter written in standard C in dual files. Aims to be embeddable, extendable and portable; Tony Wang (2014). |
| ⚙️ [tinyexpr.c] | Tiny recursive descent expression parser, compiler, and evaluation engine for math expressions; Lewis Van Winkle (2016). |
| ⚙️ [chasm.c] | Chasm Runtime Assembler; Aqil Contractor (2025). |
| ⌛ [webview.c] | Tiny cross-platform webview library for C/C++. Uses WebKit (GTK/Cocoa) and Edge WebView2 (Windows); Serge Zaitsev (2017). |
| ⌛ **fex.cxx** | A fast usermode x86 and x86-64 emulator for Arm64 Linux; Ryan Houdek ([XXXX](https://github.com/FEX-Emu/FEX)). |
| ⌛ **vixl.c** | AArch32 and AArch64 Runtime Code Generation Library; Linaro ([XXXX](https://github.com/Linaro/vixl)). |
| ⌛ **v86.c** | x86 PC emulator and x86-to-wasm JIT, running in the browser; Fabian ([XXXX](https://github.com/copy/v86)). |
| ⌛ [agnes.c] | NES emulation library with an easy to use API; Krzysztof Gabis (2019). |
| ⌛ [apelang.c] | Ape Programming Language; Krzysztof Gabis (2020). |
| ⌛ **softfloat3.c** | SoftFloat release 3; John Hauser ([XXXX](https://github.com/ucb-bar/berkeley-softfloat-3)). |

<br>
</details>

<details markdown="1">
<summary> 🍳 Testing/Debugging</summary>
<br>

| Package | Description |
|  ----  |  ----  |
| ⚙️ [debugbreak.c] | Break into the debugger programmatically; Scott Tsai (2011). |
| ⚙️ [b_stacktrace.c] | A minimalistic single-header multi-platform C89 lib for stack tracing; Borislav Stanimirov (2020). |
| ⌛ [remotery.c] | Single C file, Realtime CPU/GPU Profiler with Remote Web Viewer; Celtoys (2014). |
| ⌛ **tracy.cxx** | Frame profiler; Bartosz Taudul ([XXXX](https://github.com/wolfpld/tracy)). |
| ⌛ [errnoname.c] | errnoname is a C library that lets us get the symbolic name for each errno integer value; mentalisttraceur (2019). |
| ⌛ [fctx.c] | C unit testing in a header (works for C++ too!); Ian Blumel (2008). |
| ⌛ [greatest.c] | A C testing library in 1 file. No dependencies, no dynamic allocation. ISC licensed; Scott Vokes (2012). |
| ⌛ [utest.c] | An ultra-lightweight, micro unit test framework for C99 presented as a single-header; Oli Wilkinson (2015). |
| ⌛ [utest-h.c] | 🧪 single header unit testing framework for C and C++; Neil Henning (2015). |
| ⌛ [minctest.c] | tiny unit testing framework for ANSI C; Lewis Van Winkle (2015). |
| ⌛ [labrat.c] | Simple, single-file test harness for C/C++; Alex Thayer (2016). |
| ⌛ [munit.c] | µnit is a small testing framework for C; Evan Nemerson (2016). |
| ⌛ [rexo.c] | Neat single-file cross-platform unit testing framework for C/C++; Christopher Crouzet (2018). |
| ⌛ [picotest.c] | Picotest is a minimal C89 unit test framework, consisting of a single header file that defines 7 macros.; colinbarry (2020). |
| ⌛ [clove-unit.c] | Single-Header Unit Testing framework for C (interoperable with C++) with test autodiscovery feature; Federico De Felici (2021). |
| ⌛ [walter.c] | Write unit tests in C with no boilerplate; irek (2022). |

<br>
</details>

<details markdown="1">
<summary> 🍳 Others</summary>
<br>

| Package | Description |
|  ----  |  ----  |
| ⚙️ [hedley.c] | A C/C++ header to help move #ifdefs out of your code; Evan Nemerson (2016). |
| ⌛ [endianness.c] | Simple public domain header to get endianess at compile time on a variety of platforms; rofl0r (2017). |
| ⌛ [asap.cxx] | A C++ header-only library for creating, displaying, iterating and manipulating dates; Leonardo Guilherme de Freitas (2017). |
| ⌛ [canvas_ity.cxx] | A tiny, single-header canvas-like 2D rasterizer for C++; Andrew Kensler (2022). |
| ⌛ [catch2.cxx] | A modern, C++-native, test framework for unit-tests, TDD and BDD - using C++14, C++17 and later (C++11 support is in v2.x branch, and C++03 on the Catch1.x branch); Martin Hořeňovský (2010). |
| ⌛ [cds_job.cxx] | C++11 lock-free job queue; Cort Stratton (2016). |
| ⌛ [cimg.cxx] | The CImg Library is a small and open-source C++ toolkit for image processing; GREYC (2018). |
| ⌛ [cista.cxx] | Cista is a simple, high-performance, zero-copy C++ serialization & reflection library; Felix Gündling (2018). |
| ⌛ [cmdline.cxx] | A Command Line Parser; Hideyuki Tanaka (2009). |
| ⌛ [cpp-httplib.cxx] | A C++ header-only HTTP/HTTPS server and client library; yhirose (2012). |
| ⌛ [cpp-mmaplib.cxx] | A single file C++11 header-only memory mapped file library; yhirose (2016). |
| ⌛ [cpp-peglib.cxx] | A single file C++ header-only PEG (Parsing Expression Grammars) library; yhirose (2015). |
| ⌛ [cpp-unicodelib.cxx] | A C++17 header-only Unicode library. (Unicode 16.0.0); yhirose (2016). |
| ⌛ [debug-draw.cxx] | Immediate-mode, renderer agnostic, lightweight debug drawing API; Guilherme Lampert (2015). |
| ⌛ [doctest.cxx] | The fastest feature-rich C++11/14/17/20/23 single-header testing framework; Viktor Kirilov (2016). |
| ⌛ [flags.cxx] | ⛳ Simple, extensible, header-only C++17 argument parser released into the public domain; sailormoon (2016). |
| ⌛ [hippomocks.cxx] | Single-header mocking framework; Peter Bindels (2008). |
| ⌛ [imgui.cxx] | Dear ImGui: Bloat-free Graphical User interface for C++ with minimal dependencies; Omar (2014). |
| ⌛ [immediate2d.cxx] | A C++ drawing framework for Windows that makes simple graphics programming as fun and easy as the days when computers booted directly to a BASIC prompt; Nicholas Piegdon (2017). |
| ⌛ [inja.cxx] | A Template Engine for Modern C++; Berscheid (2017). |
| ⌛ [jargsparser.cxx] | A head-only arguments parser(argsparser) c++11 lib; Zhengqiao Wang (2022). |
| ⌛ [json.cxx] | JSON for Modern C++; Niels Lohmann (2013). |
| ⌛ [linalg.cxx] | linalg.h is a single header, public domain, short vector math library for C++; Sterling Orsten (2016). |
| ⌛ [lurlparser.cxx] | Lightweight URL & URI parser (RFC 1738, RFC 3986); Sergey Kosarevsky (2015). |
| ⌛ [micropather.cxx] | MicroPather is a path finder and A* solver (astar or a-star) written in platform independent C++ that can be easily integrated into existing code. MicroPather focuses on being a path finding engine for video games but is a generic A* solver; Lee Thomason (2012). |
| ⌛ [microprofile.cxx] | microprofile is an embeddable profiler; Jonas Meyer (2013). |
| ⌛ [mini-yaml.cxx] | Single header YAML 1.0 C++11 serializer/deserializer; Jimmie Bergmann (2018). |
| ⌛ [obfuscate.cxx] | Guaranteed compile-time string literal obfuscation header-only library for C++14; Adam Yaxley (2017). |
| ⌛ [parg.cxx] | A header only c++ library for parsing command line arguments and generating usage/help output; Brett Robinson (2018). |
| ⌛ [programoptions.cxx] | Single-header program options parsing library for C++11; Fytch (2017). |
| ⌛ [pugixml.cxx] | Light-weight, simple and fast XML parser for C++ with XPath support; Arseny Kapoulkine (2006). |
| ⌛ [random.cxx] | Random for modern C++ with convenient API; Illia (2017). |
| ⌛ [simple-svg.cxx] | Easy to use SVG library for C++ (fork of legacy Google code project archive); Adi Shavit (2015). |
| ⌛ [str_view.cxx] | Null-termination-aware string-view class for C++; Adam Sawicki (2018). |
| ⌛ [str.cxx] | Lightweight C++ string type with a configurable local buffer; Omar (2015). |
| ⌛ [swarmz.cxx] | A free, header-only C++ swarming (flocking) library for real-time applications; Michael (2016). |
| ⌛ [tinyformat.cxx] | Minimal, type safe printf replacement library for C++; Claire Foster (2011). |
| ⌛ [tinyobjloader.cxx] | Tiny but powerful single file wavefront obj loader; tinyobjloader (2012). |
| ⌛ [tinyply.cxx] | 🌍 C++11 ply 3d mesh format importer & exporter; Dimitri Diakopoulos (2015). |
| ⌛ [tinythread.cxx] | Cross-platform implementation of the C++11 Threads API; Marcus Geelnard (2010). |
| ⌛ [tinyxml2.cxx] | TinyXML2 is a simple, small, efficient, C++ XML parser that can be easily integrated into other programs; Lee Thomason (2011). |
| ⌛ [tomlplusplus.cxx] | Header-only TOML config file parser and serializer for C++17; Mark Gillard (2020). |
| ⌛ [trompeloeil.cxx] | Header only C++14 mocking framework; Björn Fahller (2014). |
| ⌛ [utl.cxx] | Collection of self-contained header-only libraries for C++17; DmitriBogdanov (2023). |
| ⌛ [visit_struct.cxx] | A miniature library for struct-field reflection in C++; Chris Beck (2016). |
| ⌛ [vulkanmemoryallocator.cxx] | Easy to integrate Vulkan memory allocation library; GPUOpen Libraries & SDKs (2017). |
| ⌛ [xatlas.cxx] | Mesh parameterization / UV unwrapping library; Jonathan Young (2016). |

<br>
</details>

<!-- ⚙️ -->

[agnes.c]: https://www.npmjs.com/package/agnes.c
[apelang.c]: https://www.npmjs.com/package/apelang.c
[atomix.c]: https://www.npmjs.com/package/atomix.c
[b_stacktrace.c]: https://www.npmjs.com/package/b_stacktrace.c
[bikeshed.c]: https://www.npmjs.com/package/bikeshed.c
[buddy_alloc.c]: https://www.npmjs.com/package/buddy_alloc.c
[ccvector.c]: https://www.npmjs.com/package/ccvector.c
[cds_sync.c]: https://www.npmjs.com/package/cds_sync.c
[cgltf.c]: https://www.npmjs.com/package/cgltf.c
[chasm.c]: https://www.npmjs.com/package/chasm.c
[clay.c]: https://www.npmjs.com/package/clay.c
[clove-unit.c]: https://www.npmjs.com/package/clove-unit.c
[cmp.c]: https://www.npmjs.com/package/cmp.c
[concord.c]: https://www.npmjs.com/package/concord.c
[csplit.c]: https://www.npmjs.com/package/csplit.c
[debugbreak.c]: https://www.npmjs.com/package/debugbreak.c
[dmc_unrar.c]: https://www.npmjs.com/package/dmc_unrar.c
[doops.c]: https://www.npmjs.com/package/doops.c
[dr_libs.c]: https://www.npmjs.com/package/dr_libs.c
[endianness.c]: https://www.npmjs.com/package/endianness.c
[errnoname.c]: https://www.npmjs.com/package/errnoname.c
[fast_obj.c]: https://www.npmjs.com/package/fast_obj.c
[fctx.c]: https://www.npmjs.com/package/fctx.c
[genann.c]: https://www.npmjs.com/package/genann.c
[glad.c]: https://www.npmjs.com/package/glad.c
[glfw.c]: https://www.npmjs.com/package/glfw.c
[greatest.c]: https://www.npmjs.com/package/greatest.c
[handmademath.c]: https://www.npmjs.com/package/handmademath.c
[hedley.c]: https://www.npmjs.com/package/hedley.c
[hypatia.c]: https://www.npmjs.com/package/hypatia.c
[inih.c]: https://www.npmjs.com/package/inih.c
[jo_mpeg.c]: https://www.npmjs.com/package/jo_mpeg.c
[kann.c]: https://www.npmjs.com/package/kann.c
[kgflags.c]: https://www.npmjs.com/package/kgflags.c
[labrat.c]: https://www.npmjs.com/package/labrat.c
[levenshtein.c]: https://www.npmjs.com/package/levenshtein.c
[libcmdf.c]: https://www.npmjs.com/package/libcmdf.c
[libgb.c]: https://www.npmjs.com/package/libgb.c
[lightmapper.c]: https://www.npmjs.com/package/lightmapper.c
[linenoise.c]: https://www.npmjs.com/package/linenoise.c
[linmath.c]: https://www.npmjs.com/package/linmath.c
[lz4.c]: https://www.npmjs.com/package/lz4.c
[microtar.c]: https://www.npmjs.com/package/microtar.c
[microui.c]: https://www.npmjs.com/package/microui.c
[minctest.c]: https://www.npmjs.com/package/minctest.c
[miniaudio.c]: https://www.npmjs.com/package/miniaudio.c
[minicoro.c]: https://www.npmjs.com/package/minicoro.c
[minilua.c]: https://www.npmjs.com/package/minilua.c
[minimp3.c]: https://www.npmjs.com/package/minimp3.c
[miniz.c]: https://www.npmjs.com/package/miniz.c
[model3d.c]: https://www.npmjs.com/package/model3d.c
[mongoose.c]: https://www.npmjs.com/package/mongoose.c
[monocypher.c]: https://www.npmjs.com/package/monocypher.c
[munit.c]: https://www.npmjs.com/package/munit.c
[my_basic.c]: https://www.npmjs.com/package/my_basic.c
[nuklear.c]: https://www.npmjs.com/package/nuklear.c
[openmodal.c]: https://www.npmjs.com/package/openmodal.c
[parg.c]: https://www.npmjs.com/package/parg.c
[parson.c]: https://www.npmjs.com/package/parson.c
[picotest.c]: https://www.npmjs.com/package/picotest.c
[pl_mpeg.c]: https://www.npmjs.com/package/pl_mpeg.c
[pocketmod.c]: https://www.npmjs.com/package/pocketmod.c
[pocketpy.c]: https://www.npmjs.com/package/pocketpy.c
[prideout.c]: https://www.npmjs.com/package/prideout.c
[qr-code-generator.c]: https://www.npmjs.com/package/qr-code-generator.c
[ranxoshi256.c]: https://www.npmjs.com/package/ranxoshi256.c
[remimu.c]: https://www.npmjs.com/package/remimu.c
[remotery.c]: https://www.npmjs.com/package/remotery.c
[rexo.c]: https://www.npmjs.com/package/rexo.c
[rfft.c]: https://www.npmjs.com/package/rfft.c
[rfont.c]: https://www.npmjs.com/package/rfont.c
[rgfw.c]: https://www.npmjs.com/package/rgfw.c
[slre.c]: https://www.npmjs.com/package/slre.c
[stb_stats.c]: https://www.npmjs.com/package/stb_stats.c
[stb.c]: https://www.npmjs.com/package/stb.c
[stmr.c]: https://www.npmjs.com/package/stmr.c
[str.c]: https://www.npmjs.com/package/str.c
[subprocess.c]: https://www.npmjs.com/package/subprocess.c
[tflac.c]: https://www.npmjs.com/package/tflac.c
[tigr.c]: https://www.npmjs.com/package/tigr.c
[tinycthread.c]: https://www.npmjs.com/package/tinycthread.c
[tinyexpr.c]: https://www.npmjs.com/package/tinyexpr.c
[tinyfiledialogs.c]: https://www.npmjs.com/package/tinyfiledialogs.c
[tinyobjloader.c]: https://www.npmjs.com/package/tinyobjloader.c
[utest-h.c]: https://www.npmjs.com/package/utest-h.c
[utest.c]: https://www.npmjs.com/package/utest.c
[utf8.c]: https://www.npmjs.com/package/utf8.c
[utf8proc.c]: https://www.npmjs.com/package/utf8proc.c
[uthash.c]: https://www.npmjs.com/package/uthash.c
[uuid_h.c]: https://www.npmjs.com/package/uuid_h.c
[uuid4.c]: https://www.npmjs.com/package/uuid4.c
[voxelizer.c]: https://www.npmjs.com/package/voxelizer.c
[walter.c]: https://www.npmjs.com/package/walter.c
[wcwidth9.c]: https://www.npmjs.com/package/wcwidth9.c
[webby.c]: https://www.npmjs.com/package/webby.c
[webview.c]: https://www.npmjs.com/package/webview.c
[yxml.c]: https://www.npmjs.com/package/yxml.c
[plibsys.c]: https://www.npmjs.com/package/plibsys.c
[pthreads4w.c]: https://www.npmjs.com/package/pthreads4w.c
[xxhash.c]: https://www.npmjs.com/package/xxhash.c
[opencl.c]: https://www.npmjs.com/package/opencl.c
[glfw3.c]: https://www.npmjs.com/package/glfw3.c
[vulkan.c]: https://www.npmjs.com/package/vulkan.c
[egl.c]: https://www.npmjs.com/package/egl.c
[sdl3.c]: https://www.npmjs.com/package/sdl3.c
[glew.c]: https://www.npmjs.com/package/glew.c
[algebra3.cxx]: https://www.npmjs.com/package/algebra3.cxx
[asap.cxx]: https://www.npmjs.com/package/asap.cxx
[canvas_ity.cxx]: https://www.npmjs.com/package/canvas_ity.cxx
[catch2.cxx]: https://www.npmjs.com/package/catch2.cxx
[cds_job.cxx]: https://www.npmjs.com/package/cds_job.cxx
[cimg.cxx]: https://www.npmjs.com/package/cimg.cxx
[cista.cxx]: https://www.npmjs.com/package/cista.cxx
[cmdline.cxx]: https://www.npmjs.com/package/cmdline.cxx
[cpp-httplib.cxx]: https://www.npmjs.com/package/cpp-httplib.cxx
[cpp-mmaplib.cxx]: https://www.npmjs.com/package/cpp-mmaplib.cxx
[cpp-peglib.cxx]: https://www.npmjs.com/package/cpp-peglib.cxx
[cpp-unicodelib.cxx]: https://www.npmjs.com/package/cpp-unicodelib.cxx
[debug-draw.cxx]: https://www.npmjs.com/package/debug-draw.cxx
[doctest.cxx]: https://www.npmjs.com/package/doctest.cxx
[flags.cxx]: https://www.npmjs.com/package/flags.cxx
[ggformat.cxx]: https://www.npmjs.com/package/ggformat.cxx
[hippomocks.cxx]: https://www.npmjs.com/package/hippomocks.cxx
[imgui.cxx]: https://www.npmjs.com/package/imgui.cxx
[immediate2d.cxx]: https://www.npmjs.com/package/immediate2d.cxx
[inja.cxx]: https://www.npmjs.com/package/inja.cxx
[jargsparser.cxx]: https://www.npmjs.com/package/jargsparser.cxx
[json.cxx]: https://www.npmjs.com/package/json.cxx
[linalg.cxx]: https://www.npmjs.com/package/linalg.cxx
[lurlparser.cxx]: https://www.npmjs.com/package/lurlparser.cxx
[micropather.cxx]: https://www.npmjs.com/package/micropather.cxx
[microprofile.cxx]: https://www.npmjs.com/package/microprofile.cxx
[mini.cxx]: https://www.npmjs.com/package/mini.cxx
[mini-yaml.cxx]: https://www.npmjs.com/package/mini-yaml.cxx
[obfuscate.cxx]: https://www.npmjs.com/package/obfuscate.cxx
[parg.cxx]: https://www.npmjs.com/package/parg.cxx
[programoptions.cxx]: https://www.npmjs.com/package/programoptions.cxx
[pugixml.cxx]: https://www.npmjs.com/package/pugixml.cxx
[random.cxx]: https://www.npmjs.com/package/random.cxx
[rang.cxx]: https://www.npmjs.com/package/rang.cxx
[simple-svg.cxx]: https://www.npmjs.com/package/simple-svg.cxx
[str_view.cxx]: https://www.npmjs.com/package/str_view.cxx
[str.cxx]: https://www.npmjs.com/package/str.cxx
[swarmz.cxx]: https://www.npmjs.com/package/swarmz.cxx
[tinyformat.cxx]: https://www.npmjs.com/package/tinyformat.cxx
[tinyobjloader.cxx]: https://www.npmjs.com/package/tinyobjloader.cxx
[tinyply.cxx]: https://www.npmjs.com/package/tinyply.cxx
[tinythread.cxx]: https://www.npmjs.com/package/tinythread.cxx
[tinyxml2.cxx]: https://www.npmjs.com/package/tinyxml2.cxx
[tomlplusplus.cxx]: https://www.npmjs.com/package/tomlplusplus.cxx
[trompeloeil.cxx]: https://www.npmjs.com/package/trompeloeil.cxx
[unformat.cxx]: https://www.npmjs.com/package/unformat.cxx
[utl.cxx]: https://www.npmjs.com/package/utl.cxx
[visit_struct.cxx]: https://www.npmjs.com/package/visit_struct.cxx
[vulkanmemoryallocator.cxx]: https://www.npmjs.com/package/vulkanmemoryallocator.cxx
[xatlas.cxx]: https://www.npmjs.com/package/xatlas.cxx

<br>


## Node.js / Web

| Package | Description |
|  ----  |  ----  |
| 🌐 [extra-boolean] | Boolean data type has two possible truth values to represent logic. |
| 🌐 [extra-bit] | The bit is a basic unit of information in information theory, computing. |
| 🌐 [extra-integer] | A 32-bit integer can store values from −2^31 to 2^31 − 1. |
| 🌐 [extra-number] | A number is a mathematical object used to count, measure, and label. |
| 🌐 [extra-bigint] | A BigInt can represent whole numbers larger than 2⁵³ - 1. |
| 🌐 [extra-math] | Mathematics is the classification and study of all possible patterns. |
| 🌐 [extra-function] | A function is a set of statements that performs a task or calculates a value. |
| 🌐 [extra-async-function] | An async function is a function that delivers its result asynchronously (through Promise). |
| 🌐 [extra-array] | An Array is a collection of values, stored contiguously. |
| 🌐 [extra-iterable] | An iterable is a sequence of values. |
| 🌐 [extra-object] | An Object is a collection of properties (entries), each with a name (key) and a value. |
| 🌐 [extra-set] | A Set is a collection of unique values. |
| 🌐 [extra-map] | A Map is a collection of key-value pairs, with unique keys. |
| 🌐 [extra-entries] | Entries is a list of key-value pairs, with unique keys. |
| 📦 [extra-child-process] | Useful additions to inbuilt child_process module. |
| 🌐 [extra-path] | Useful additions to inbuilt path module. |
| 📦 [extra-fs] | Useful additions to inbuilt fs module. |
| 🌐 [extra-sleep] | Sleep for specified time. |
| 🌐 [extra-jsdoc-text] | Utilities for processing JSDoc text. |
| 🌐 [extra-javascript-text] | Utilities for processing JavaScript text. |
| 🌐 [extra-markdown-text] | Utility methods for Markdown text. |
| 📦 [extra-build] | Common build tools for extra-* packages. |
| ⌛ [extra-lists] | Lists is a pair of key list and value list, with unique keys. |
| ⌛ [extra-string] | A collection of common string functions. |
| ⌛ [extra-wordnet] | WordNet is a lexical database of semantic relations between words. |
| ⌛ [extra-sorted-array] | A sorted array is a collection of values, arranged in an order. |


[extra-boolean]: https://www.npmjs.com/package/extra-boolean
[extra-bit]: https://www.npmjs.com/package/extra-bit
[extra-integer]: https://www.npmjs.com/package/extra-integer
[extra-number]: https://www.npmjs.com/package/extra-number
[extra-bigint]: https://www.npmjs.com/package/extra-bigint
[extra-math]: https://www.npmjs.com/package/extra-math
[extra-function]: https://www.npmjs.com/package/extra-function
[extra-async-function]: https://www.npmjs.com/package/extra-async-function
[extra-array]: https://www.npmjs.com/package/extra-array
[extra-iterable]: https://www.npmjs.com/package/extra-iterable
[extra-object]: https://www.npmjs.com/package/extra-object
[extra-set]: https://www.npmjs.com/package/extra-set
[extra-map]: https://www.npmjs.com/package/extra-map
[extra-entries]: https://www.npmjs.com/package/extra-entries
[extra-child-process]: https://www.npmjs.com/package/extra-child-process
[extra-path]: https://www.npmjs.com/package/extra-path
[extra-fs]: https://www.npmjs.com/package/extra-fs
[extra-sleep]: https://www.npmjs.com/package/extra-sleep
[extra-jsdoc-text]: https://www.npmjs.com/package/extra-jsdoc-text
[extra-javascript-text]: https://www.npmjs.com/package/extra-javascript-text
[extra-markdown-text]: https://www.npmjs.com/package/extra-markdown-text
[extra-build]: https://www.npmjs.com/package/extra-build
[extra-lists]: https://github.com/nodef/extra-lists
[extra-string]: https://github.com/nodef/extra-string
[extra-wordnet]: https://github.com/nodef/extra-wordnet
[extra-sorted-array]: https://github.com/nodef/extra-sorted-array

<!-- | ⚙️ [extra-array.cxx] | Generic array in C. | -->
<!-- | ⚙️ [extra-boolean.cxx] | Boolean data type has two possible truth values to represent logic. | -->
<!-- | ⚙️ [extra-lib-todo.cxx] | Header-only library for C++ | -->
<!-- | ⚙️ [extra-macroarg.cxx] | Manage arguments of macros in C. | -->
<!-- | ⚙️ [extra-swap.cxx] | Macros to swap variables in C. | -->
<!-- [extra-array.cxx]: https://www.npmjs.com/package/extra-array.cxx -->
<!-- [extra-boolean.cxx]: https://www.npmjs.com/package/extra-boolean.cxx -->
<!-- [extra-lib-todo.cxx]: https://www.npmjs.com/package/extra-lib-todo.cxx -->
<!-- [extra-macroarg.cxx]: https://www.npmjs.com/package/extra-macroarg.cxx -->
<!-- [extra-swap.cxx]: https://www.npmjs.com/package/extra-swap.cxx -->

<br>


## Bash / Command prompt (CLI)

| Package | Description |
|  ----  |  ----  |
| 🐚 [cls.sh] | Clear screen and scrollback on Linux. |
| 🖥️ [clear.cmd] | Clear screen like Unix in Windows Command prompt. |
| 🖥️ [sleep.cmd] | Sleep for specified time in Windows Command prompt. |
| 🐚 [extra-cd] | Change the working directory, with shortcuts and listing. |
| 🐚 [extra-bel.sh] | Produce BEL sound in Linux Terminal. |
| 🐚 [nvgraph.sh] | CLI for nvGraph, which is a GPU-based graph analytics library written by NVIDIA, using CUDA. |
| 🐚 [snap-data.sh] | CLI for SNAP dataset, which is a collection of more than 50 large networks. |


[cls.sh]: https://www.npmjs.com/package/cls.sh
[clear.cmd]: https://www.npmjs.com/package/clear.cmd
[sleep.cmd]: https://www.npmjs.com/package/sleep.cmd
[extra-cd]: https://www.npmjs.com/package/extra-cd
[extra-bel.sh]: https://www.npmjs.com/package/extra-bel.sh
[nvgraph.sh]: https://www.npmjs.com/package/nvgraph.sh
[snap-data.sh]: https://www.npmjs.com/package/snap-data.sh

<br>
<br>


## My Story

During my research work (2021-23), I develop a [CLI for nvGraph](https://github.com/nodef/nvgraph.sh) - a GPU-based graph analytics library by NVIDIA, using CUDA; and a [CLI for SNAP dataset](https://github.com/nodef/snap-data.sh) - a collection of more than 50 large networks. To minimize manual work, I write scripts to [Shorten author, editor, journal, and booktitle in a BibTeX file](https://github.com/javascriptf/script-minify-bibtex), another to [Get publications list from DBLP as a table in LaTeX or in BibTeX for references](https://github.com/javascriptf/script-publications-list), one to [Make a gist secret by creating a new secret gist, and deleting the old one](https://github.com/javascriptf/script-gist-conceal), and another to [Sync a file to a Git repository (such as GitHub Gist) periodically](https://github.com/javascriptf/script-git-sync-file) in Node.js. For a short-term course on Distributed Systems, I design of a simple UDP/datagram based [NTP-like client and server](https://github.com/javascriptf/nodejs-time-server) using Node.js to simulate the effect of transmission delays in a local, intra-continental, and inter-continental network. In 2015-16, I design a few Windows applications. These include a [Countdown timer](https://github.com/winp/timer) for Windows, a tool to [Calculate an 8-bit hash of a given string using XOR+ROR method](https://github.com/winp/text-hash), another to [Terminate unnecessary/unused processes](https://github.com/winp/process-kill) in Windows, and one to [Determine the IP address of a Website from its URL](https://github.com/winp/website-ip). I also write an [Intel 4004 assembler](https://github.com/javascriptf/nodejs-4004-assembler) in Node.js that converts a plain assembly language file to binary. While working at Verizon Hyderabad with Prashant Pathak, we develop a [Wireless RFID-based Snacks Ticketing System](https://github.com/raspberrypif/rfid) using a Raspberry Pi with a Weigand based HID reader.

I also write and maintain a diverse range of Open source packages for Node.js. These include tools to [Tunnel web server from private IP](https://github.com/nodef/extra-tunnel), perform automated trades with a [Javascript interface for FYERS API](https://github.com/nodef/extra-fyers), get [Insightful quotes on a topic](https://github.com/nodef/extra-quotes), and get [SPDX License text](https://github.com/nodef/extra-license). In 2018-19, I note the release of Google's new WaveNet based Text-To-Speech (TTS) engine. I use this opportunity to write a tool that [Crawls Wikipedia pages and uploads TTS to YouTube](https://github.com/nodef/wikipedia-tts). These videos are available upon searching "wikipedia audio article". To support this, I write tools to get [GCP](https://github.com/nodef/extra-gcpconfig)/[AWS](https://github.com/nodef/extra-awsconfig) config, use long text with [Google TTS](https://github.com/nodef/extra-googletts)/[Amazon Polly](https://github.com/nodef/extra-amazontts) through a [Common tool](https://github.com/nodef/extra-tts), [Interface with FFMPEG](https://github.com/nodef/extra-ffmpeg), [Generate still video from an audio and image file](https://github.com/nodef/extra-stillvideo), [Modify Ian Bishop's YouTube Uploader to handle captions](https://github.com/golangf/porjo--youtubeuploader), and [Interface with the modified YouTube uploader from Node.js](https://github.com/nodef/extra-youtubeuploader).

In 2017-18, I use full-text search in PostgreSQL to build a hand-crafted [Natural Language Query System for Indian Food Composition Tables 2017 (IFCT2017)](https://ifct2017.github.io). IFCT2017 is published by T. Longvah, R. Ananthan, K. Bhaskarachary, and K. Venkaiah from National Institute of Nutrition (NIN). It contains detailed nutrient composition of 528 key foods in India. I use a PDF to Excel converter to read data in tables of each page, merge them together, fix conversion issues through manual checking, and convert it to CSV. Further, I adjust the units used for each nutrient to grams, and add additional relevant high-level columns. Finally I write a Node.js package to get [Programmatic access to this Compositions data](https://github.com/ifct2017/compositions). Data from a number of additional tables, including the compositions data, is available in the [Main package](https://github.com/ifct2017/ifct2017). To support natural language queries, I convert the [English language query to an informal SQL](https://github.com/nodef/pg-english) first, perform Named Entity Recognition (NER) with [Promised Map interface for Table in PostgreSQL](https://github.com/nodef/map-pg), and then convert [Informal SQL SELECT to formal SQL](https://github.com/nodef/pg-slang). Testing required constant resetting and provisioning of new databases. For this, I write a script to [Manage Addon Pool of an App in Heroku](https://github.com/nodef/heroku-addonpool). I also prepare CLI tools to convert [E numbers](https://github.com/nodef/food-e) and [INS numbers](https://github.com/nodef/food-ins) of food additives to their respective full names.

I also maintain collections of functions for in-built types in Node.js, such as, [Arrays](https://github.com/nodef/extra-array), [Sets](https://github.com/nodef/extra-set), [Maps](https://github.com/nodef/extra-map), [Objects](https://github.com/nodef/extra-object), [Iterables](https://github.com/nodef/extra-iterable), [Entries](https://github.com/nodef/extra-entries), [Lists](https://github.com/nodef/extra-lists), [IEntries](https://github.com/nodef/extra-ientries), [ILists](https://github.com/nodef/extra-ilists), [Sorted Arrays](https://github.com/nodef/extra-sorted-array), [Array Views](https://github.com/nodef/extra-array-view), [Booleans](https://github.com/nodef/extra-boolean), [Bits](https://github.com/nodef/extra-bit), [Integers](https://github.com/nodef/extra-integer), [Numbers](https://github.com/nodef/extra-number), [Strings](https://github.com/nodef/extra-string), [BigInts](https://github.com/nodef/extra-bigint), [Functions](https://github.com/nodef/extra-function), and [Async Functions](https://github.com/nodef/extra-async-function). In addition, I extend in-built modules, such as, [File System (FS)](https://github.com/nodef/extra-fs), [Child Process](https://github.com/nodef/extra-child-process), [Path](https://github.com/nodef/extra-path), and [Math](https://github.com/nodef/extra-math). To support the automated building, testing, and documentation generation, I write and use a special [Build tool](https://github.com/nodef/extra-build) - this requires utilities for processing [JavaScript](https://github.com/nodef/extra-javascript-text), [JSDoc](https://github.com/nodef/extra-jsdoc-text), and [Markdown](https://github.com/nodef/extra-markdown-text) text. Building documentation for some packages requires the use of a [Custom TypeDoc theme](https://github.com/nodef/extra-typedoc-theme). To generate ASCII videos of examples automatically, an [Asciinema-based tool](https://github.com/nodef/extra-asciinema) can be used. To delete old/unused packages automatically, I write a tool to [Delete NPM packages in an organization](https://github.com/javascriptf/devtools-delete-npm-org-packages) using Puppeteer. I originally conceived of maintaining Open source code as a potential business venture - which allows me to make passive money through donations. However, the market was already bustling with utility packages. Despite meticulous documentation and detailed list of functions, differentiation proved elusive.

<br>
<br>


[![](https://img.youtube.com/vi/X-w8RFt_jRw/maxresdefault.jpg)](https://www.youtube.com/watch?v=X-w8RFt_jRw)
[![ORG](https://img.shields.io/badge/org-wolfram77-green?logo=Org)](https://wolfram77.github.io)
![](https://ga-beacon.deno.dev/G-RC63DPBH3P:SH3Eq-NoQ9mwgYeHWxu7cw/nodef.github.io)
