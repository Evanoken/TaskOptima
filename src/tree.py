from OpenGL.GL import *
from OpenGL.GLUT import *
from OpenGL.GLU import *

# Define the tree parameters
angle = 25
segment_length = 10
growth_factor = 1.1
animation_delay = 10  # Delay between each frame update (in milliseconds)

def apply_rules(axiom, rules):
    """
    Apply the L-system rules to the axiom.
    """
    result = ''
    for char in axiom:
        result += rules.get(char, char)
    return result

def draw_tree(instructions, angle, segment_length):
    """
    Draw the tree using PyOpenGL.
    """
    stack = []
    for instruction in instructions:
        if instruction == 'F':
            glVertex2f(0, segment_length)
            glTranslatef(0, segment_length, 0)
        elif instruction == '-':
            glRotatef(angle, 0, 0, 1)
        elif instruction == '+':
            glRotatef(-angle, 0, 0, 1)
        elif instruction == '[':
            stack.append((glGetFloatv(GL_MODELVIEW_MATRIX), glGetFloatv(GL_PROJECTION_MATRIX)))
        elif instruction == ']':
            modelview_matrix, projection_matrix = stack.pop()
            glLoadMatrixf(modelview_matrix)
            glMultMatrixf(projection_matrix)

def animate_growth(instructions, angle, segment_length, growth_factor, animation_delay):
    """
    Animate the growth of the tree using PyOpenGL.
    """
    # Initialize OpenGL
    glutInit()
    glutInitWindowSize(800, 600)
    glutCreateWindow(b"Tree Animation")
    glClearColor(1.0, 1.0, 1.0, 1.0)
    gluOrtho2D(-400, 400, -300, 300)

    # Create the growth animation function
    def growth_animation():
        glClear(GL_COLOR_BUFFER_BIT)
        glLoadIdentity()

        # Slowly draw the tree segments to create the growth effect
        for i in range(1, len(instructions) + 1):
            partial_instructions = instructions[:i]
            glLineWidth(1.0)  # Reset the line width for each segment
            glColor3f(0.0, 0.0, 0.0)  # Set color to black
            glBegin(GL_LINES)
            draw_tree(partial_instructions, angle, segment_length)
            glEnd()
            glFlush()
            glutSwapBuffers()
            glutTimerFunc(animation_delay, growth_animation, 0)
            glLineWidth(growth_factor * glGetFloatv(GL_LINE_WIDTH))

    # Start the growth animation
    glutTimerFunc(0, growth_animation, 0)
    glutMainLoop()

def main():
    # Define the L-system rules and parameters
    rules = {
        'F': 'FF',
        'X': 'F-[[X]+X]+F[+FX]-X'
    }
    axiom = 'X'
    iterations = 5

    # Generate the L-system instructions
    instructions = axiom
    for _ in range(iterations):
        instructions = apply_rules(instructions, rules)

    # Animate the growth of the tree
    animate_growth(instructions, angle, segment_length, growth_factor, animation_delay)

if __name__ == '__main__':
    main()
