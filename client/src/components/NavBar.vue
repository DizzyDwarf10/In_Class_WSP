<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useCartStore } from "../stores/cart";

const cartStore = useCartStore();
</script>

<template>
    <nav class="navbar is-info" role="navigation" aria-label="main navigation">
        <div class="container">
            <div class="navbar-brand">
                <a class="navbar-item" href="https://bulma.io">
                    <img alt="Vue logo" width="30" height="30" src="@/assets/logo.svg" />

                </a>

                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
                   data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <RouterLink to="/" active-class="is-active" class="navbar-item">
                        Home
                    </RouterLink>

                    <RouterLink to="/products" active-class="is-active" class="navbar-item">
                        Products
                    </RouterLink>

                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                            More
                        </a>

                        <div class="navbar-dropdown">
                            <RouterLink to="/about" active-class="is-active" class="navbar-item">
                                About
                            </RouterLink>
                            <RouterLink to="/jobs" active-class="is-active" class="navbar-item">
                                Jobs
                            </RouterLink>
                            <RouterLink to="/contact" active-class="is-active" class="navbar-item">
                                Contact
                            </RouterLink>
                            <hr class="navbar-divider">
                            <RouterLink to="/report-issue" active-class="is-active" class="navbar-item">
                                Report an issue
                            </RouterLink>
                        </div>
                    </div>

                    <RouterLink to="/cart" class="navbar-item button is-primary">
                        🛒 {{ cartStore.totalQuantity }}
                    </RouterLink>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            <RouterLink to="/sign-up" active-class="is-active" class="button is-primary">
                                Sign up
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped></style>