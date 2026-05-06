<form action="/register" method="POST">
    <!-- Username Field -->
    <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>
    </div>

    <!-- First Name Field -->
    <div class="form-group">
        <label for="firstname">First Name:</label>
        <input type="text" id="firstname" name="firstname" required>
    </div>

    <!-- Last Name Field -->
    <div class="form-group">
        <label for="lastname">Last Name:</label>
        <input type="text" id="lastname" name="lastname" required>
    </div>

    <!-- Email Field -->
    <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
    </div>

    <!-- Password Field -->
    <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
    </div>

    <!-- Submit Button -->
    <button type="submit">Register</button>
</form>
